const user = {
    username : "Priyanshu",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to the website.`); // This is used for referring the current context.
        // console.log(this); //Gives the current context.  
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

console.log(this); // In case of node, this refers to empty Object as global object in case of node is empty.
// But for browser global object is window. so this refers to window object.


// function chai(){
//     let username = "Priyanshu";
//     console.log(this.username); // not able to use this to access username in the function
//     console.log(this); // Returns an Object which is not empty
// }
// chai();

// const chai = function (){
//     let username = "Priyanshu";
//     console.log(this.username); // not able to use this to access username in the function
//     console.log(this); // Returns an Object which is not empty
// }
// chai();


const chai =  () => {   // Arrow Funcitons Syntax
    let username = "Priyanshu"; 
    console.log(this.username); // not able to use this to access username in the function
    console.log(this); // return empty Object.
}
//chai();


// const addTwo = (num1, num2) => { // Traditional way to declare arrow functions
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 //Implicit return in case of arrow Function when there is one line statement.
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username:"Priyanshu"}) // Paranthesis should be used to return object.

console.log(addTwo(3, 4));