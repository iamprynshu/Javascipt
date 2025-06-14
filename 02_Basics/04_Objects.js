//Singleton Objects :- 

const tinderUser = new Object(); // This is a singleton Object

tinderUser.id = "abc123";
tinderUser.name = "Alice";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email : "priyanshu.sharma@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Priyanshu", // Nesting of Objects.
            lastName : "Sharma"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName); 

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"a", 4:"b"}
const obj3 = { 5:"a", 6:"b"}

//const obj4 = {obj1, obj2, obj3}; // 3 objects will be inside in an object in the result
//const obj4 = Object.assign({}, obj1, obj2, obj3); // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const obj4 = {...obj1, ...obj2, ...obj3} // Spread Operator.
console.log(obj4);

// From Database values comes in the format of array of objects.

const users = [ //Array of Objects.
    {
        id:"123",
        name:"John"
    },
    {
        id:"234",
        name:"Alice"
    },
    {
        id:"345",
        name:"Robert"
    }
]

console.log(users[1].id); // How to access in the array of objects.
console.log(tinderUser);

//These methods are useful for iterating through the object or making entries in databases.

console.log(Object.keys(tinderUser)); // It returns the array of keys of Object tinderUser.
console.log(Object.values(tinderUser)); // It returns the array of values of Object tinderUser.
console.log(Object.entries(tinderUser)); // It returns the array of arrays of all the entries of Object tinderUser.

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //It returns true or false.