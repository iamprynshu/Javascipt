const score = 400;
console.log(score);

const balance = new Number(100.769);
console.log(balance); // Explicitly defines that it is a number.

// There are many functions that we can use in case of numbers. 

console.log(balance.toString()); // Converts the number into String.
console.log(balance.toFixed(2)); // Precision value upto 2. This is generally used in E-Commerce Applications.

const otherNumber = 123.987;
console.log(otherNumber.toPrecision(3)); // Returns a String ang give precision upto 3 digits(not after decimal but in total.)

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-In')); //beautifies the number in Indian Format number System.

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE); 

// ======== MATHS ========= 

console.log(Math);
console.log(Math.abs(-4));  //Gives the absolute Value (only positive Number.)
console.log(Math.round(4.6)); // Round of Normally.
console.log(Math.ceil(4.1)); //Round of to higher value.
console.log(Math.floor(4.9)); // round of to smaller value.

// Math is mostly used with Random function.

console.log(Math.random()); // Gives the random number from 0 to 1;
console.log(Math.floor(Math.random()*10)+1); // Gives random number from 1 to 10;

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min); // Formula for random numbers from 10 to 20.