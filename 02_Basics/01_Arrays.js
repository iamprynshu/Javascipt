// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // Another way of initializing arrays
// console.log(myArr[1]); // way to fetch elements of arrays

// Array methods

// myArr.push(6) // To add element at the last.
// myArr.push(7)
// myArr.pop() // To remove last added element.

// myArr.unshift(9) // to add element at the very start position.
// myArr.shift() // to remove element at the very start position.

// console.log(myArr.includes(9)); // Return Boolean.
// console.log(myArr.indexOf(3)); // returns index of 3. if element is not present then it will return "-1".

// const newArr = myArr.join() // Converts the array into String.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);

///////////////      SLICE     /////////////
// array.slice(startIndex, endIndex)
// startIndex: The index where the extraction begins (inclusive).
// endIndex: The index where the extraction ends (exclusive). If omitted, it extracts to the end of the array.
// Purpose: Extracts a section of an array and returns a new array containing the extracted elements. 
// It does not modify the original array.


///////////////      SPLICE     /////////////
// array.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex: The index at which to start modifying the array.
// deleteCount: The number of elements to remove from the array.
// item1, item2, ...: Optional. New elements to add to the array at the startIndex.
// Purpose:
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements. 
// It modifies the original array. 