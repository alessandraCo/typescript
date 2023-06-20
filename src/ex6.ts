//Welcome Message
console.log(`Ex6: Armstrong Numbers`);
console.log(`How many armstrong numbers are there between 0 and 100000?`);

//output
let arrayArmstrong : number[] = [];
let count : number = 0;

//function that computes the count of digits of a given number (only positive numbers)
function numberDigits(n : number) : number {
    let digitsCount : number = 0;
    while(n > 0) {
        n = Math.floor(n/10);
        digitsCount++;
    }
    return digitsCount;
}

//function that verify is a number is an armstrong number or not
function isArmstrong(n : number) : boolean {
    //this because, initializing tempSum = 0, zero will be returned ad an armstrong even if is not
    if(n === 0) {       
        return false;
    }
    const digits = numberDigits(n);  //calculate number of digits
    let tempSum : number = 0;
    let num = n;
    while(num > 0) {
        let oneDigit = num%10;       //picking one digit 
        num = Math.floor(num/10);    //removing the digit 
        tempSum += Math.pow(oneDigit, digits);
    }
    return (tempSum===n); 
}

for(let i=0; i<=100000; i++) {
    if(isArmstrong(i)) {
        count++;
        arrayArmstrong.push(i);
    }
}
console.log(arrayArmstrong);
console.log("there are " + count + " armstrong numbers!");

//html utility
window.onload = () => {
    document.getElementById("armstrong")?.addEventListener("click", showArmstrong);
}

function showArmstrong() {
    const resultContainer = document.getElementById("showResult");
    const number = document.getElementById("number");
    //clear previous outputs
    if(number !== null) {
        number.innerText = "";
    }
    while(resultContainer?.firstChild) {
        resultContainer.firstChild.remove();
    }
    //new output
    if(number !== null) {
        number.innerText = `There are ${count} armstrong numbers!`;
    }
    let newP = document.createElement("p");
    newP.innerText = arrayArmstrong.join(' ');
    newP.setAttribute("class", "center-output");
    resultContainer?.appendChild(newP);
}