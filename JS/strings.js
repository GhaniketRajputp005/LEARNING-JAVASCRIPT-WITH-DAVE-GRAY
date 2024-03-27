const myVariable = "Mathematics";
console.log(myVariable.length);

console.log(myVariable.slice(5,8)); // index from [5, 8)
console.log(myVariable.slice(5)); 
console.log(myVariable.slice(5,6)); // index one greater than starting position returns the character itself.

console.log(myVariable.includes("e"));
console.log(myVariable.split("i"));  // part left & right to it in an array.
console.log(myVariable.split("")); //. The empty string "" passed as an argument indicates that each character in the string will become a separate string element in the resulting array.

console.log("John, joe, dave".split(",")); //separates the given string in an array of string based on the string character passed in split function.
console.log("Every good boy does fine.".split(" "));




