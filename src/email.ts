//email settings
import nodemailer from "nodemailer";

//user settings
class User {
  private static idAll: number = 1;
  private id: number;
  private username: string;
  private email: string | undefined;
  private password: string;
  private subscribeToNews: boolean;
  private isAdmin: boolean;

  public constructor(
    username: string,
    email: string,
    password: string,
    subscription: boolean,
    authorization: boolean = false
  ) {
    this.id = User.idAll;
    this.username = username;
    this.email = email;
    this.password = password;
    this.subscribeToNews = subscription;
    this.isAdmin = authorization;
    User.idAll++;
  }

  public getId(): number {
    return this.id;
  }

  public getUsername(): string {
    return this.username;
  }

  public getEmail(): string | undefined {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getSubscription(): boolean {
    return this.subscribeToNews;
  }

  public getIsAdmin(): boolean {
    return this.isAdmin;
  }

  public changeUsername(newUsername: string) {
    this.username = newUsername;
  }

  public changePassword(newPassword: string) {
    this.password = newPassword;
  }

  public changeEmail(newEmail: string) {
    this.email = checkMail(newEmail);
  }

  public changeSubscription(newSubscription: boolean) {
    this.subscribeToNews = newSubscription;
  }

  public setAdministration(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  public printUser() {
    console.log("| id utente: | " + this.id);
    console.log("| username:  | " + this.username);
    console.log("| email:     | " + this.email);
    this.subscribeToNews
      ? console.log("| newsletter:| yes")
      : console.log("| newsletter:| no");
  }
}

function checkMail(email: string): string | undefined {
  let mailRegex: string =
    "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$";
  const check = email.match(mailRegex);
  if (check) {
    return email;
  } else {
    console.log(
      "This email is not valid and will not be registered. You can modify your email later"
    );
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

let userList: User[] = [];
let user1 : User = new User("user1", "user1@mail.com", "pass1", true, false);
let user2 : User = new User("user2", "user2@mail.com", "pass2", false, false);  //no newsletter
let user3 : User = new User("user3", "user3@mail.com", "pass3", true, false);
let user4 : User = new User("user4", "user4@mail.com", "pass4", true, false);
let user5 : User = new User("user5", "user5@mail.com", "pass5", true, false);
userList.push(user1);
userList.push(user2);
userList.push(user3);
userList.push(user4);
userList.push(user5);

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'thalia.kuhlman82@ethereal.email',
      pass: 'eCRAkt1mtPBHwmtwWT'
  }
});

userList.forEach(user => sendEmail(user1, user));

 function sendEmail(fromUser : User, toUser : User) {
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
    } else {
      console.log("Email sent: " + info.response);
      return;
    }
  });
  return;
}
