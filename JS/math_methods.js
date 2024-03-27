console.log(Math.PI);
console.log(Math.trunc(Math.PI));// returns integer part of given number
console.log(Math.round(3.2));
console.log(Math.round(3.5));
console.log(Math.ceil(Math.PI));

console.log(Math.floor(Math.PI));

console.log(Math.pow(3,2));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// random function have values [0, 1)

// from 1 to 10

console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Since Math.random can return 0, then Math.ceil(Math.random()*10) could also return 0 and that value is out of your [1..10] range.

