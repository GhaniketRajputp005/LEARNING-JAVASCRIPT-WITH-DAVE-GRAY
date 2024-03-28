alert("hello world");


// =============== USER INPUT ===============//

let mybool = confirm("Ok === True\nCancel === False");
console.log(mybool);

let myname = prompt("please enter your name.");
if(myname){
console.log(myname);
console.log(myname.length);
console.log(myname.trim().length);
console.log(myname.length);
console.log(myname.trim()); // actual string will be logged on console , any whitespaces leading or trailing will be  removed.

}
else
console.log("You didn't enter your name.");