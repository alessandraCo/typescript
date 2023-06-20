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
let messageOut: string[] = [];

//function to dencrypt single letter
function shiftLetter(letter: string, encrypt: number): string {
  let code: number = letter.charCodeAt(0);
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
  } else {
    return letter;
  }
}

//function to decrypt the message
function decipherMessage(message: string, encryption: number): string {
  messageOut = [];
  let decryptedMessage: string[] = message.split("");
  encryption *= -1;
  decryptedMessage.forEach((letter) => {
    let letterOut = shiftLetter(letter, encryption);
    messageOut.push(letterOut);
  });
  return messageOut.join("");
}

//html utility
window.onload = () => {
  document.getElementById("messageForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const messageIn = (<HTMLInputElement>document.getElementById("message"))?.value;
    let caesarIn : string | number= (<HTMLInputElement>document.getElementById("caesarNum"))?.value;
    caesarIn = parseInt(caesarIn);
    const messageOut = decipherMessage(messageIn, caesarIn);
    console.log(messageOut);
    const resultContainer = document.getElementById("showResult");
    //clear previous outputs
    while(resultContainer?.firstChild) {
      resultContainer.removeChild(resultContainer.firstChild);
    }
    //new output
    let newP = document.createElement("p");
    newP.innerText = messageOut;
    newP.setAttribute("class", "center-output");
    resultContainer?.appendChild(newP);
  });
}