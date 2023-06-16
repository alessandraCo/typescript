//Welcome Message
console.log(`Ex5: WhatsApp`);
console.log(`I'll calculate the cost of your message`);

//TESTS: message (cost)
//'it should work stop' (0.042 --> 0.04€)
//'hi everyone and welcome to the battle code stop' (0.115 --> 0.12€)
//'hi there stop' (0.027 --> 0.03€)
//'the cat is on the table stop' (0.078 --> 0.08€)

//input
const whatsMessage: string = "the cat is on the table stop";
//output
let cost : number;

function calculateCost(message : string) : number {
    let tempCost : number = 0;
    let arrayWords = message.split(' ');
    arrayWords.forEach(word => {
        if(word === "stop") {
            return tempCost;
        } else {
            tempCost += (word.length*0.001)+0.01;
        }
    });
    return tempCost;
}

function checkStopMessage(message : string) {
    let arrayWords = message.split(' ');
    if(arrayWords[arrayWords.length-1] !== "stop") {
        console.log("Error: the message must end with 'stop'");
        return;
    } else {
        cost = calculateCost(message);
        cost = Math.round(cost*100)/100;
        console.log("The cost of this message '" + whatsMessage + "' is: " + cost + "€");
        return cost;
    }
}

checkStopMessage(whatsMessage);




