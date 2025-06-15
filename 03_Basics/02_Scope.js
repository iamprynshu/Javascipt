let a =30; // Global Scope
var c=40;  

if(true){ // Block Scope
    let a = 300;
    const b = 400;
    console.log("let a: " + a); // Block Scope
    var c = 50; //50 will be printed, which should not be printed as there should be block scope which is not true in case of var.
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username = "hitesh";

    function two(){
        let website = "Youtube";
        console.log(username); // child function can access parent function variables.
    }

    //console.log(website); // parent function cannot access child function variables.
    two();
}

one();


// ++++++++++ Interesting +++++++++++ 

addOne(5); //Hoisting is possible in this case. 
function addOne(num1){
    return num1+1;
}


addTwo(6); // Hoisting is not possible in this case as we are holding function in a variable.
const addTwo = function(num1){
    return num1+2;
}
