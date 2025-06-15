function addTwoNumbers(num1,  num2){
    console.log(num1+num2);
}

addTwoNumbers(1, 4);

function loginUserMessage(username = "sam"){ //username default value  = "sam"
    if(!username){ // if username === undefinded
        console.log("Please enter username");
        return "";
    }
    else {
        return `${username} just loggedin!`;
    }
}

const result =  loginUserMessage("");
console.log(result);    

function calculateCartPrice(...num1){ //This is the rest operator, It will take all the values given as argument in the function calling.
    return num1; // Since we have used rest Operator, the array of all the values will return.
}

console.log(calculateCartPrice(3, 34, 45));

//Handling of objects in the function.

const user = {
    username:"Priyanshu",
    Price:"999"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.Price}.`);
}

handleObject(user); 
handleObject({  // we can make object at the time of calling of function.
    username:"Priyanshu",
    Price:"999"
})


const myNewArray = [100, 200, 300];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
