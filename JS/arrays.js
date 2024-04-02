const myArr = [];

myArr[0] = "Dave";
myArr[1] = 102;
myArr[2] = false;

console.log(myArr); // array can store different data types
console.log(myArr.length);

//=================ADDING IN END===============================


myArr.push("school");// adds to the end of the array and returns the new length
console.log(myArr);

myArr.pop(); // pops last item and returns it
console.log(myArr);

// ==================ADDING IN BEGINNING==============================

myArr.unshift("school"); // adds to the beginning of the array and returns the new length
console.log(myArr);

myArr.shift(); // removes the first element and returns it


// =======================DELETE=========================

delete myArr[1]; // deletes the element at index 1 but leaves an empty space
console.log(myArr); // leaves an empty space and is undefined 

// =====================SPLICE===========================


// removing values
myArr.splice(2, 1); //  at index 2 remove 1 element
console.log(myArr);

// replacing values
myArr.splice(2, 1, 45); //  at index 2 remove 1 element
console.log(myArr);

// adding values
myArr.splice(2, 0, "school"); //  at index 2 remove 0 elements and add "school"
console.log(myArr);

// ======================SLICE========================== 

const newArr = myArr.slice(1, 3); // from index 1 to 2 i.e: one less than 3
console.log(newArr);

// ======================REVERSE==========================

console.log(myArr.reverse());

// ======================JOIN==========================

const newstring = myArr.join();
console.log(newstring);
//takes all the elements of the array and joins them into a string separated by a comma by default.

const newstring2 = myArr.join(" ");
console.log(newstring2);
//takes all the elements of the array and joins them into a string separated by a space.

const newstring3 = myArr.join(" - ");
console.log(newstring3);
//takes all the elements of the array and joins them into a string separated by a hyphen.

const newstring4 = myArr.join("");
console.log(newstring4);
//takes all the elements of the array and joins them into a string without any separator.

//=====================SPLIT==========================

const newstr = newstring.split(",");
console.log(newstr);

//=====================CONCAT==========================
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//=====================SPREAD_OPERATOR(...)==========================

const arr4 = [...arr1, ...arr2];
console.log(arr4);

const arr5 = [arr1, arr2];// nested array as spread operator is not used
console.log(arr5);

//=====================2D_Array==========================
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];
const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];
console. log(equipShelfA[1]);
//or
console. log(clothesShelfB[0]);
const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
console. log (equipDept) ;
console. log(clothesDept);


//=====================3D_Array==========================
const sportsStore = [equipDept, clothesDept];
console. log(sportsStore);
console. log(sportsStore[0][1][0]);
console. log(sportsStore[1][0][2]);