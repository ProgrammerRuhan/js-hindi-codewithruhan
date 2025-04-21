const str = "Slice Method";
let sliceM = str.slice(5, 7);
// console.log(sliceM);

const trimVal = "   ruhan   ";
// console.log(trimVal);
// console.log(trimVal.trim());

const uRl = "https://ruhan.com %home%main";
let uRlValue = uRl.replace(" ", "/");
let uRlValue1 = uRl.replaceAll("%", "/");
// console.log(uRl);
// console.log(uRlValue);
// console.log(uRlValue1);

// console.log(new Number('33'));
// console.log(new Number('33A'));

let nmbr = new Number(100);
let anoNmbr = new Number(325.15014);
// console.log(nmbr.length);
// console.log(nmbr.toString().length);
// console.log(nmbr.toFixed(2)); // chang the value and show the result

// console.log(anoNmbr.toPrecision(5));
const hundreads = 10000000;
// console.log(hundreads.toLocaleString("en-IN"));

// ================-->     Math     <--======================

// console.log(Math.abs(-4)); // it only change the negative to positive not the positive to ng
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.round(4.8));

const max = 35;
const min = 13;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ================-->     Date     <--======================

const myDate = new Date();

function dateFun(val) {
  //   console.log(`It's comming from date Function ===>>> " ${val} "`);
}

dateFun(myDate.toDateString());
dateFun(myDate.toLocaleDateString());
dateFun(myDate.toLocaleString());

// ================-->     Array in JavaScript     <--======================

const Arry = [8, "Array", true];
// console.table(Arry);

// Arry.push("it push item in the end")
// Arry.pop() "it remove item from the end"
// Arry.unshift("it add item in first position")
// Arry.shift() "it remove item from first position"

// console.log(Arry.includes("Array")); // return true false if the item were or not
// console.log(Arry.indexOf(2)); // return if where the item position

// const newArr = Arry.join() // eta array type poriborton kore string kore
// console.log(Arry);
// console.log(newArr);

// Slice Splice

const myArray = [0, 1, 2, 3, 4, 5];
console.log("A=> ", myArray);

const myArr1 = myArray.slice(0, 3);
console.log(myArr1);
console.log("B=> ", myArray);

const myArr2 = myArray.splice(0, 3);
console.log(myArr2);
console.log("C=> ", myArray); // splice change the original array
