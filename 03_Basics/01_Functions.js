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
