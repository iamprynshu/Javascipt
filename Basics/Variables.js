const Id = "12345"; // For Constant declaration.
let Name = "Priyanshu";
var Password = "robbinBaskins";
City = "Muradnagar"; //This is possible but not recommended.
let State; // Undefined {If we don't initialize the variable.} 

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

//Ways of printing data:-

console.log(Name);
console.table([Id, Name, Password, City, State]);