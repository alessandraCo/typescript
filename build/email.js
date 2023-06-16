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
//users list
let usersList = [];
//add new users:
let utente1 = new User("utente1", "utente1@mail.com", "password", false);
let cri = new User("cristina", "cristinaelkoury98@gmail.com", "criPass", true);
let luna = new User("luna", "luna.saponaro7@gmail.com", "lunaPass", true);
let ale = new User("ale", "petruzzelli.alessandro@gmail.com", "alePass", true);
let io = new User("io", "alessandra.colletti@gmail.com", "myPass", true);
usersList.push(utente1);
usersList.push(cri);
usersList.push(luna);
usersList.push(ale);
usersList.push(io);
//add first admin:
let admin1 = new User("admin1", "admin1@mail.com", "secretPass", false, true);
usersList.push(admin1);
//newsletter
function sendingNews() {
    usersList.forEach((user) => {
        //sending email only to those users subscribed to the newsletter and with a valid email
        if (user.getSubscription()) {
            const email = user.getEmail();
            if (email !== undefined) {
                console.log("sending email to: " + email);
                //email settings
                var transporter = nodemailer_1.default.createTransport({
                    service: "hotmail",
                    auth: {
                        user: "testnode2023@outlook.it",
                        pass: "passNode2023",
                    },
                });
                var mailOptions = {
                    from: "testnode2023@outlook.it",
                    to: "" + email + "",
                    subject: "Sending Email using Node.js",
                    text: "Hi " + user.getUsername() + " from my newsletter application!",
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log("Email sent: " + info.response);
                    }
                });
                return;
            }
        }
    });
    return;
}
console.log(usersList);
sendingNews();
