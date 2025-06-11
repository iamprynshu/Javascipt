// Singleton :- when we create object from constructor
// Object.create // That's how we create object using Constructor.

// Object literals :- When we create object from literal.

const mySum = Symbol("Key1");

const jsUser = {
    name: "Priyanshu",
    "fullname":"Priyanshu Sharma",
    [mySum]:"mykey1", // Using Symbol as key of the object.
    age: 23,
    location: "jaipur",
    email: "Priyanshu@goggle.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday", "Saturday"]
}  // That's how we create an object.

console.log(jsUser.email); // One way to access data of the object {Not Much Preferabble}
console.log(jsUser["email"]); // Other way to access the data of the object {Much Preferabble} Object considers key as a string.
console.log(jsUser["fullname"]);
console.log(jsUser[mySum]); // way to fetch symbol key value.
console.log(jsUser["lastLoggedInDays"][1]);


jsUser.email = "priyanshu@gpt.com"; // That's how we can update the value of the key in an object.
//Object.freeze(jsUser); // If we freeze the object then we can update the values of the keys in an object.
jsUser.email = "priyanshu@microsoft.com";
//console.log(jsUser); // email has not been changed by the above line as we have already used the freeze function over the object.


jsUser.greeting = function(){
    console.log("Hello! Have a good day.");
}

jsUser.greetingWithName = function(){
    console.log(`Hello! Have a good day ${this.fullname}.`); //using 'string interpolation' and 'this'  for accessing key of the same object.
}

jsUser.greeting();
jsUser.greetingWithName();
console.log(jsUser.greeting); // Only function reference is printed, if we don't call the function.