// String to Number Conversion
let score = "33abc";

console.log(typeof(score)); // String type

let valueInNumber = Number(score); // converts into number 

console.log(typeof(valueInNumber)); // number type
console.log(valueInNumber); // But give NaN 

// Basic Conversions :-

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1; false => 0

// Boolean Conversion

let isLoggedIn = 1;

let BooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false // Emplty String to false
// "Priyanshu" => true //Non empty string to true

// String Conversion

let num = 33;

let stringNum = String(num);
console.log(stringNum);





