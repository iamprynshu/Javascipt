const name = "Priyanshu"; 
const repoCount = 50;

console.log(`Hello! My name is ${name} and my repo Coumt is ${repoCount}`); // This is String Interpolation.

//String Interpolation :- String interpolation in JavaScript is the process of embedding expressions,
// such as variables, directly into a string. This is primarily achieved through template literals, introduced in ES6.
// Template literals use backticks (`) 
// instead of single or double quotes and allow for the embedding of expressions using the ${expression} syntax.

const gameName = new String('iamprynshu'); // Another way of initializing String, it will give String Object with Key-Value Pair.

console.log(gameName[0]); // Results in 'i'
console.log(gameName.__proto__); // Results in prototype Object which contains lot of functions that can be accessed.
console.log(gameName.length); // Length of the string.
console.log(gameName.toUpperCase()); // Converts the string into upperCase.
console.log(gameName.charAt(5)); // Returns the character at Given Position.
console.log(gameName.indexOf('y')); // Returns the index of given Character.


const newString = gameName.substring(0, 4); // We can only use positive values in substring function.
console.log(newString);

const anotherString = gameName.slice(-9, -4); // We can also use negative values in slice function.
console.log(anotherString);


const spaceString = "     Priyanshu     ";
console.log(spaceString.trim()); // Remove all the extra white Spaces.

const url = "https://Priyanshu.com/Priyanshu%20Sharma";
console.log(url.replace('%20', '_')); 
console.log(url.includes('Priyanshu')); // Returns boolean Value.


const splitString = "Priyanshu Sharma is very good boy.";
let words = splitString.split(' '); // Split the String on the basis of white space.
console.log(words); 