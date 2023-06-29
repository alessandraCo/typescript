"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//email settings
const nodemailer_1 = __importDefault(require("nodemailer"));
//user settings
class User {
    constructor(username, email, password, subscription, authorization = false) {
        this.id = User.idAll;
        this.username = username;
        this.email = email;
        this.password = password;
        this.subscribeToNews = subscription;
        this.isAdmin = authorization;
        User.idAll++;
    }
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getSubscription() {
        return this.subscribeToNews;
    }
    getIsAdmin() {
        return this.isAdmin;
    }
    changeUsername(newUsername) {
        this.username = newUsername;
    }
    changePassword(newPassword) {
        this.password = newPassword;
    }
    changeEmail(newEmail) {
        this.email = checkMail(newEmail);
    }
    changeSubscription(newSubscription) {
        this.subscribeToNews = newSubscription;
    }
    setAdministration(isAdmin) {
        this.isAdmin = isAdmin;
    }
    printUser() {
        console.log("| id utente: | " + this.id);
        console.log("| username:  | " + this.username);
        console.log("| email:     | " + this.email);
        this.subscribeToNews
            ? console.log("| newsletter:| yes")
            : console.log("| newsletter:| no");
    }
}
User.idAll = 1;
function checkMail(email) {
    let mailRegex = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$";
    const check = email.match(mailRegex);
    if (check) {
        return email;
    }
    else {
        console.log("This email is not valid and will not be registered. You can modify your email later");
        return undefined;
    }
}
////users list
//let usersList: User[] = [];
////add new users:
//let utente1 = new User("utente1", "utente1@mail.com", "password", false);
// let io = new User("io", "alessandra.colletti@gmail.com", "myPass", true);
// usersList.push(utente1);
// usersList.push(cri);
// usersList.push(luna);
// usersList.push(ale);
// usersList.push(io);
// //add first admin:
// let admin1 = new User("admin1", "admin1@mail.com", "secretPass", false, true);
// usersList.push(admin1);
// const emailArray: string[] = [
//   "alessandra.colletti@gmail.com",
//   "ale.colletti@hotmail.it",
//   "alessandra.colletti@soprasteria.com",
//   "alessandra.colletti@mail.polimi.it",
//   "alessandro.petruzzelli@mail.polimi.it",
//   "petruzzelli.alessandro@gmail.com"
// ];
let userList = [];
let user1 = new User("user1", "user1@mail.com", "pass1", true, false);
let user2 = new User("user2", "user2@mail.com", "pass2", false, false); //no newsletter
let user3 = new User("user3", "user3@mail.com", "pass3", true, false);
let user4 = new User("user4", "user4@mail.com", "pass4", true, false);
let user5 = new User("user5", "user5@mail.com", "pass5", true, false);
userList.push(user1);
userList.push(user2);
userList.push(user3);
userList.push(user4);
userList.push(user5);
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'thalia.kuhlman82@ethereal.email',
        pass: 'eCRAkt1mtPBHwmtwWT'
    }
});
userList.forEach(user => sendEmail(user1, user));
function sendEmail(fromUser, toUser) {
    let mailOptions = {
        from: fromUser.getEmail(),
        to: toUser.getEmail(),
        subject: "Sending Email using Node.js",
        text: `Hi ${toUser.getUsername()} from my newsletter application!`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return;
        }
        else {
            console.log("Email sent: " + info.response);
            return;
        }
    });
    return;
}
