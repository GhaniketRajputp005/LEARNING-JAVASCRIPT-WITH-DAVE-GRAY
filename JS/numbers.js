const myNum = 43;
const myFloat = 43.01;
const string = "45.98";

console.log(myNum);
console.log(myFloat);
console.log(myNum == myFloat);
console.log(Number(string) + 4);
console.log(Number("hello") );
console.log(Number(undefined));
console.log(Number(true));

console.log(Number.isInteger(myNum));
console.log(parseFloat(string));
console.log(myFloat.toFixed(1));

// The Number.isNaN() method determines whether the passed value is NaN and its type is Number.

// The global isNaN() function determines whether a value is NaN or not.

console.log(isNaN("dave"));