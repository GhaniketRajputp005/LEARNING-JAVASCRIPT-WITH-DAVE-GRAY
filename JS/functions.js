// FUNCTIONS

function factorial(num1){
    console.log(num1);
   let res = 1;
    for(let i = 2; i<= num1; i++){
        res = res*i;
    }
    return res;
    
}

// let userInput = prompt("Enter a number:");
// let num = Number(userInput); if live  server is used then use these window objects. else then simply donot use this.

console.log(factorial(5));

// ANONYMOUS FUNCTIONS

const getUserNameFromEmail = function(email){
    return email.slice(0, email.indexOf("@"));
}


// Yes, the function getUserNameFromEmail is defined using an anonymous function expression. In JavaScript, you can define a function without specifying its name, and such functions are referred to as anonymous functions.

// getUserNameFromEmail becomes a constant variable that holds a reference to the anonymous function. You can then call getUserNameFromEmail as if it were a regular function, passing an email address as an argument, and it will return the username part of the email.

console.log(getUserNameFromEmail("davesingh@gmail.com"));

// ARROW FUNCION

const getUserNameFromEmail1 = (email) => {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail1("davesingh@gmail.com"));


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("mAHESH"));