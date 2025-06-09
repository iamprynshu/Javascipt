// Dates

let myDate = new Date()
// console.log(myDate.toString());  Convert the date into String.
// console.log(myDate.toDateString()); //Convert the date into String. much better.
// console.log(myDate.toLocaleString()); //Convert the date into String. More readble.
// console.log(typeof myDate); //Date is a Object.

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // Gives output in milliseconds
// console.log(myCreatedDate.getTime()); // Gives output in milliseconds
// !Important // console.log(Math.floor(Date.now()/1000)); // Gives output in seconds. Math.floor is used for round of Purpose.

let newDate = new Date()
console.log(newDate); 
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time ` // String Interpolation.

newDate.toLocaleString('default', {
    weekday: "long",
    
})