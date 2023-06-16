"use strict";
//Welcome Message
console.log(`Ex1: Nor Fibonacci Nor Prime`);
console.log(`I print the first 786 numbers that are neither Fibonacci nor prime numbers`);
//sequences
let fiboSequence = [];
let primeSequence = [];
let norFiboNorPrime = [];
//function that returns true if the considered number is a Perfect Square
function isPerfectSquare(input) {
    return Number.isInteger(Math.sqrt(input));
}
//function that returns true if the considered number is part of Fibonacci Sequence AND compute fiboSequence
//algorithm: a number is part of Fibonacci Sequence if and only if either one of (5N^2 + 4) or (5N^2 - 4) is a perfect square
function isFromFibonacci(input) {
    if (isPerfectSquare(5 * input * input + 4) ||
        isPerfectSquare(5 * input * input - 4)) {
        fiboSequence.push(input);
        return true;
    }
    else {
        return false;
    }
}
//function that returns true if the considered number is a Prime number AND compute primeSequence
//algorith: try to divide the number by other prime numbers in primeSequence
//It stops when the % is equals 0 (composite number --> prime number = false) or when there aren't elements in primeSequence left (prime number = true)
function isPrime(input) {
    if (input <= 1) {
        return false;
    }
    else if (input === 2) {
        primeSequence.push(input);
        return true;
    }
    else {
        for (let i = 0; i < primeSequence.length; i++) {
            if (input % primeSequence[i] === 0) {
                //composite number (isPrime = false)
                return false;
            }
        }
        primeSequence.push(input);
        return true; //if there are no dividers: prime number (isPrime = true)
    }
}
function computeNorFiboNorPrime(maxSize) {
    let i = 0;
    let size = norFiboNorPrime.length;
    while (size < maxSize) {
        let prime = isPrime(i);
        let fibo = isFromFibonacci(i);
        if (!prime && !fibo) {
            norFiboNorPrime.push(i);
            size = norFiboNorPrime.length;
        }
        i++;
    }
}
computeNorFiboNorPrime(786);
console.log(`norFiboNorPrime: \n` + norFiboNorPrime.join(" "));
console.log(`fibo: \n` + fiboSequence.join(" "));
console.log(`prime: \n` + primeSequence.join(" "));
// utility function to check if the norFiboNorPrime sequence is correct
// this function compares two arrays element per element
// function allEquals(input: number[]): boolean {
//   for (let i = 0; i < norFiboNorPrime.length; i++) {
//     if (norFiboNorPrime[i] !== input[i]) {
//       return false;
//     }
//   }
//   return true;
// }
