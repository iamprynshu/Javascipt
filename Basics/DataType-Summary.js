// JavaScript is a dynamically typed language, meaning that the type of a variable is not explicitly declared and is determined 
// at runtime based on the value assigned to it. This contrasts with statically
//  typed languages like TypeScript or Java, where the type of a variable must be declared before it can be used. 


// Primitive Datatypes :- 

// 7 Types => String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123'); // Give unique symbol.
console.log(id === anotherId); // They are not equal.

// Reference (Non Primitive DataTypes) :- 

// Arrays, Objects, Functions

let heros = ["Shaktiman", "Hanuman", "Goku"]; // Array

let myobj = {       //Object
    name : "Priyanshu",
    age : 23
}

let myFunc = function(){ //Function
    console.log("Hello World");
}