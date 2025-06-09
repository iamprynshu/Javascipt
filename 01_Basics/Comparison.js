// Comaparison and Equality Operators works differently.
// We should avoid these type of conversions in Production.

console.log(null > 0);
console.log(null ==  0); // Equality operator works differently and does not convert the null into number.
console.log(null >= 0); // Comparison operator converts the null into number and then operation is performed.

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === {Strict Check and also check the DataType}

console.log("2" === 2) // Gives False

