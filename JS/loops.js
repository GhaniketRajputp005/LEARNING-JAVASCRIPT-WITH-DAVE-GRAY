let num  = 1;

while(num < 5){
    num++;
    console.log(num);
}

for(let i  = 0; i <= 10; i++){
    console.log(i);
}

let nam = "dave";
let rev = "";
for(let i = 0; i < nam.length; i++){
    rev += nam[nam.length -i -1];
}
// for(let i = 0; i < nam.length; i++){
//     rev += nam.charAt(nam.length - i - 1);
// }
console.log(rev);

// let nam = "dave";
// let reversedNam = "";
// for(let i = nam.length - 1; i >= 0; i--){
//     reversedNam += nam.charAt(i);
// }
// console.log(reversedNam);
