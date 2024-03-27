// this is a comment

// data types

"dave"
console.log("dave");

typeof("dave");
console.log(typeof("dave"));

console.log(typeof(1));
console.log(typeof(1.1));
console.log(typeof(true));

let myVar;
console.log(typeof(myVar));

// In JavaScript, when you declare a variable using the let keyword, you're not specifying a datatype; instead, you're indicating that the variable can be reassigned a new value later in the program and that it's scoped to the block in which it's defined.

myVar = "ghaniket";
console.log(typeof(myVar));

// In JavaScript, primitive data types like numbers, strings, booleans, null, undefined, and symbols are not used explicitly to declare variables. Instead, you can use the let keyword to declare a variable and assign a value to it. The variable's data type is determined by the value assigned to it.

let myNum = 42;
myNum += 2;
console.log(myNum);

console.log(myNum + myVar);
console.log(typeof(myNum + myVar));

let myBool = myNum === myVar;
console.log(myBool);


alert("Hello, World!");
//  alert() is not a feature of Node.js. It's a browser-specific function used to display alerts in web browsers. If you run this code in Node.js, you'll get an error.