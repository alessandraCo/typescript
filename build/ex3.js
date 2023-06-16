"use strict";
//Welcome Message
console.log(`Ex3: Encrypted Message`);
console.log(`I'll decipher the given message`);
//messages (number)
//MJQQT BTWQI! (5)
//MABL BL T GXZTMBOX VTXLTK DXR (-7)
//DZACL WL ALYNL WL NLACL NLXAL! (+401)
//input
const message = "DZACL WL ALYNL WL NLACL NLXAL!";
const caesarNumber = +401;
//output
let messageOut = [];
//function to dencrypt single letter
function shiftLetter(letter, encrypt) {
    let code = letter.charCodeAt(0);
    //encrypting only capital letters
    if (code >= 65 && code <= 90) {
        code += encrypt;
        while (code < 65) {
            code += 26;
        }
        while (code > 90) {
            code -= 26;
        }
        letter = String.fromCharCode(code);
        return letter;
    }
    else {
        return letter;
    }
}
//function to decrypt the message
function decipherMessage(message, encryption) {
    let decryptedMessage = message.split("");
    encryption *= -1;
    decryptedMessage.forEach((letter) => {
        let letterOut = shiftLetter(letter, encryption);
        messageOut.push(letterOut);
    });
    return messageOut.join("");
}
console.log(decipherMessage(message, caesarNumber));
