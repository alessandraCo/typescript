"use strict";
//Welcome Message
console.log(`Ex5: WhatsApp`);
console.log(`I'll calculate the cost of your message`);
//TESTS: message (cost)
//'it should work stop' (0.042 --> 0.04€)
//'hi everyone and welcome to the battle code stop' (0.115 --> 0.12€)
//'hi there stop' (0.027 --> 0.03€)
//'the cat is on the table stop' (0.078 --> 0.08€)
//input
//const whatsMessage: string = "the cat is on the table stop";
//output
let cost;
function calculateCost(message) {
    let tempCost = 0;
    let arrayWords = message.split(" ");
    arrayWords.forEach((word) => {
        if (word === "stop") {
            return tempCost;
        }
        else {
            tempCost += word.length * 0.001 + 0.01;
        }
    });
    return tempCost;
}
function checkStopMessage(message) {
    let arrayWords = message.split(" ");
    if (arrayWords[arrayWords.length - 1] !== "stop") {
        console.log("Error: the message must end with 'stop'");
        return;
    }
    else {
        cost = calculateCost(message);
        cost = Math.round(cost * 100) / 100;
        console.log("The cost of this message '" + message + "' is: " + cost + "€");
        return cost;
    }
}
//html utility
window.onload = () => {
    var _a;
    (_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (e) => {
        e.preventDefault();
        const tip = document.getElementById("tip");
        if (tip) {
            tip.style.opacity = "0";
        }
        const waMessage = document.getElementById("textInput")
            .value;
        if (waMessage === null) {
            return;
        }
        //clear previous outputs
        const resultContainer = document.getElementById("showResult");
        while (resultContainer === null || resultContainer === void 0 ? void 0 : resultContainer.firstChild) {
            resultContainer.removeChild(resultContainer.firstChild);
        }
        //generating output
        const costOut = checkStopMessage(waMessage);
        if (costOut === undefined && tip) {
            tip.style.opacity = "1";
            return;
        }
        else {
            //new output
            let newP = document.createElement("p");
            newP.innerText = `The cost of this message is ${costOut} €`;
            newP.setAttribute("class", "center-output");
            resultContainer === null || resultContainer === void 0 ? void 0 : resultContainer.appendChild(newP);
        }
    });
};
