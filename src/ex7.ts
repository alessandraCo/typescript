//Welcome Message
console.log(`Ex7: Newsletter`);
console.log(
  `automatic emails to users subscribed to the newsletter (with node.js and typescript)`
);

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

let admin1 : User = new User("admin1", "admin1@mail.com", "admin1Pass", true, true);
userList.push(admin1);

//Menù
console.log("Welcome! What do you want to do?");
console.log("A: register a new user, B: login, E: end");

//user input
import promptSync from "prompt-sync";

//user interaction
const prompt = require("prompt-sync")({ sigint: true });
let input = prompt("your choice: ");
while (input !== "E") {
  switch (input) {
    case "A":
      let user = registerUser();
      user.printUser();
      break;
    case "B":
      console.log("Please, insert your username: ");
      const username = prompt();
      console.log("Please, insert your password: ");
      const pass = prompt();
      let userLogged = authenticate(username, pass);
      if (userLogged !== undefined) {
        if (userLogged.getIsAdmin()) {
          secondMenuAdmin(userLogged);
        } else {
          secondMenuUser(userLogged);
        }
      } else {
        console.log("incorrect username or password");
      }
      break;
    default:
      console.log("invalid input, please chose one of the following: ");
      console.log("A: register a new user, B: login, E: end");
      break;
  }
  console.log("A: register a new user, B: login, E: end");
  input = prompt("your choice: ");
}

//newsletter
function sendingNews(fromUser : User) {
  userList.forEach((user) => {
    //sending email only to those users subscribed to the newsletter and with a valid email
    if (user.getSubscription()) {
      const email = user.getEmail();
      if (email !== undefined) {
        //email settings
        var transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'thalia.kuhlman82@ethereal.email',
              pass: 'eCRAkt1mtPBHwmtwWT'
          }
        });

        var mailOptions = {
          from: fromUser.getEmail(),
          to: email,
          subject: "Sending Email using Node.js",
          text: "Hi "+ user.getUsername() +" from my newsletter application!",
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }
      return;
    }
  });
  return;
}

function registerUser(): User {
  console.log("Welcome on board!");
  console.log("Please, insert your username");
  const username = prompt();
  console.log("Please, insert your email");
  let email = prompt();
  email = checkMail(email);
  console.log("Please, insert your password");
  const password = prompt();
  console.log("Do you want to subscribe to newsletter?");
  console.log("Y: yes, N: no");
  let sub = prompt();
  while (sub !== "Y" && sub !== "N") {
    console.log("invalid input");
    console.log("Do you want to subscribe to newsletter?");
    console.log("Y: yes, N: no");
    sub = prompt();
  }
  const utente: User = new User(username, email, password, sub);
  userList.push(utente);
  return utente;
}

function secondMenuAdmin(adminLogged: User) {
  console.log(
    "Welcome " + adminLogged.getUsername() + "! What do you want to do?"
  );
  console.log("F: change to admin, G: send newsletter, E: end");
  let choice = prompt();
  while (choice !== "E") {
    switch (choice) {
      case "F":
        console.log("let's do that!");
        break;
      case "G":
        sendingNews(adminLogged);
        break;
      default:
        console.log("Please, enter a valid input");
        break;
    }
    console.log("F: change to admin, G: send newsletter, E: end");
    choice = prompt();
  }
}

function secondMenuUser(userLogged: User) {
  console.log("Welcome " + userLogged.getUsername() + "!");
}

function searchByUsername(username: string): User | undefined {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].getUsername() === username) {
      return userList[i];
    }
  }
  return undefined;
}

function authenticate(user: string, pass: string): User | undefined {
  let userPresent = searchByUsername(user);
  //registered user
  if (userPresent !== undefined) {
    //password OK: login
    if (userPresent.getPassword() === pass) {
      userPresent?.printUser();
      console.log("You logged in!");
      return userPresent;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}
