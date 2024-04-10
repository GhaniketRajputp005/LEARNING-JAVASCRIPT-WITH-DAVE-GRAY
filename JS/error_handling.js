// variable = "dave";
// console.log(variable);

"use strict"; // it'll throw an error if there is any undeclared variable

// variable = "dave";
// console.log(variable); // ReferenceError: variable is not defined

// Object..name = "dave";  syntax error

// const name = "dave";
// name = "john"; // TypeError: Assignment to constant variable.

function makeerror() {
  try {
    // const name = "dave";
    // name = "john";
    throw new customError("this is a custom error");

    // throw new Error("this is an error");                  //  generic error & doesn't require a separate function like customError

  } catch (err) {  // it'll only execute if there is an error

    // console.log(err);
    // console.error(err);
    //console.warn(err);
    // console.table(err);

    console.error(err.name);
    console.error(err.message);
    console.error(err.stack);
  } finally {
    // finally block will always run whether there is an error or not
    console.log("finally block");
  }
}

// makeerror();

// error stack has 2 parts: error name and error message

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}

function makeerror1() {
  let i = 3;

  while (i) {
    console.log(i);
    try {
      if (i % 2 != 0) throw new Error("odd number");
      // if error is thrown, it'll skip the next line of code and directly go to catch block

      console.log("even number");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("finally block");
      i--;
    }
  }
}

makeerror1();
