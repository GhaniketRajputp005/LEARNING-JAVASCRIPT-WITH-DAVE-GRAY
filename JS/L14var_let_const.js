
// IN VAR WE CAN REDECLARE OR REASSIGN THE VARIABLE

var x = 1;  // FUNCTION SCOPED
var x = 2;
console.log(x);

// IN LET WE CAN'T REDECLARE THE VARIABLE INSTEAD WE CAN REASSIGN THE VALUE

let y = 1; // BLOCK SCOPED
// let y = 2;   ERROR
y = 2;
console.log(y);

// IN CONST WE CAN'T REDECLARE OR REASSIGN THE VARIABLE

const z = 1; // BLOCK SCOPED
// z = 2; ERROR
console.log("value of z is:" ,z );  

// SO IF YOU KNOW YOU ARE GOING TO REASSIGN THE VALUE THEN USE LET ELSE USE CONST


//  || scope of var, let and const ||

// GLOBAL SCOPE

function myFuc(){
    var a = 1;
    let b = 2;
    const c = 3;
    {

        //================================================================================================ var scope is extended to the function scope below it from where it is declared.
        var a = 4;
        let b = 5;
        const c = 6;
        console.log('Block Scope:', a, b, c);

    }
    console.log('Function Scope:', a, b, c);
}

myFuc();