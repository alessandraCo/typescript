"use strict";
//Welcome Message
console.log(`Ex3: Encrypted Message`);
console.log(`I'll decipher the given message`);
//messages (number)
//MJQQT BTWQI! (5)
//MABL BL T GXZTMBOX VTXLTK DXR (-7)
//DZACL WL ALYNL WL NLACL NLXAL! (+401)
//input
//const message: string = "DZACL WL ALYNL WL NLACL NLXAL!";
//const caesarNumber: number = +401;
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
    messageOut = [];
    let decryptedMessage = message.split("");
    encryption *= -1;
    decryptedMessage.forEach((letter) => {
        let letterOut = shiftLetter(letter, encryption);
        messageOut.push(letterOut);
    });
    return messageOut.join("");
}
//html utility
window.onload = () => {
    var _a;
    (_a = document.getElementById("messageForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
        var _a, _b;
        e.preventDefault();
        const messageIn = (_a = document.getElementById("message")) === null || _a === void 0 ? void 0 : _a.value;
        let caesarIn = (_b = document.getElementById("caesarNum")) === null || _b === void 0 ? void 0 : _b.value;
        caesarIn = parseInt(caesarIn);
        const messageOut = decipherMessage(messageIn, caesarIn);
        console.log(messageOut);
        const resultContainer = document.getElementById("showResult");
        //clear previous outputs
        while (resultContainer === null || resultContainer === void 0 ? void 0 : resultContainer.firstChild) {
            resultContainer.removeChild(resultContainer.firstChild);
        }
        //new output
        let newP = document.createElement("p");
        newP.innerText = messageOut;
        newP.setAttribute("class", "center-output");
        resultContainer === null || resultContainer === void 0 ? void 0 : resultContainer.appendChild(newP);
    });
};
