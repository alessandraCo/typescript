# **Typescript**
#### typescript exercises regarding Strings and Arrays of numbers
##### exercises works both with console and with graphical html interface styled in scss
---
### **Demo**
![](https://github.com/alessandraCo/typescript/blob/main/typescript.gif)
---
### **Detailed description:**
* *Ex1 -* prints the first 786 numbers that are neither Fibonacci nor Prime numbers
* *Ex2 - Spin sdroW:* given a String, returns the same String but with all five or more letter words reversed
* *Ex3 - Encrypted Message:* decrypting a message coded with Caesar Cipher. 
    * The number of Caesar is provided
    * Messages are composed only of the 26 CAPITAL letters of the Latin alphabet: lowercase messages are not decrypted
    * Messages contain no accent
    * White spaces and special characters are not encoded
* *Ex 4 - Il Lonfo:* given a text with the poem "Il Lonfo", returns a text containing only the words alphabetical ordered removing duplicates and punctuation.
   * output will be in lowercase
   * words in the output have to be separated by a space ( )
* *Ex 5 - Whatsapp:* calculates the price of a given whatsapp message
   * A message must end with `stop`
   * A word of length L costs `L*0.001+0.01` €
   * The word 'stop' and spaces are free 
* *Ex6 - Armstrong:* calculates how many Armstrong numbers are between 0 and 100000 
   * *An Armstrong number is a natural integer that is the sum of its own digits each raised to the power of the number of digits*
* *Ex7 - newsletter:* small app console only that automatic sends emails to users subscribed to the newsletter using nodemailer module of node.js and Ethereal account. After running the app you can:
   * register a new User (saved in a Arraylist)
   * login: you can login as admin or as a common user (boolean property of User)
     * admin: access another menu where it is possible to make someone an admin or to send newsletter to all user registered (with a personalized message)
* *email:* small function that automatic sends emails from a specified user to all users present in a user list nodemailer module of node.js and Ethereal account. It is possible to include a personalized message (like "Hi ${username}!")
---
### **Installation:**
1. Clone this repository
2. For the first six exercises only run the project
3. For the seventh and the "email" exercises:
   1. install `node.js`:
   *  if you have already installed `node.js` you can skip this passage
   * you can check it typing in the terminal `node -v`: if this command returns the `node.js` version, you can skip this passage, otherwise:
      * go to [Node.js](https://nodejs.org), dowload and install it
   2. install "nodemailer": in you terminal, write: `npm i nodemailer` 
   3. from the project folder, start the exercises typing in your terminal:
   * `node ./build/ex7.js` for exercise 7
   * `node ./build/email.js` for email exercise
---
### **Additional info:**
- Ethereal (used in the seventh and in the "email" exercise) is a fake SMTP service, completely free anti-transactional email service where messages never get delivered. It helped me fix the "concurrent connections limit exceeded" error that occurred every time trying to send emails from an outlook account to more than two users.
---
### **Demo** Ex7
![](https://github.com/alessandraCo/typescript/blob/main/ex7.gif)
