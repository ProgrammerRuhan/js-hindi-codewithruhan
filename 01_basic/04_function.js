// i wrote this Function

function my(valueOFi) {
  console.log(`${valueOFi} => this is a function with value I`);
}

let print_number = 7;

for (let i = 1; i <= print_number; i++) {
  // my(i);
}

// my sudu my holo function er refferenc and
// bracket soho my() eta holo function er exicution ba exicute

function addingFunc(val1, val2) {
  if (typeof val1 === "number" && typeof val2 === "number") {
    console.log(val1 + val2);
  } else {
    console.log("Both values must be numbers.");
  }
}

// addingFunc(3, 5) ;

const nameString = "Ruhan Islam";
// const filterVal = nameString.split("");
const filterVal = nameString.split("").filter((char) => char !== " ");
// console.log(filterVal);

//           function 1
// function addTN(num1, num2) {
//   console.log(num1 + num2);
// }

// const valOFaddTN = addTN(2, 3);

// console.log(valOFaddTN);

//           function 2

function addTN(num1, num2) {
  const resutlOF_num1_num2 = num1 + num2;

  return resutlOF_num1_num2;
  // othoba just do it for one line code
  // return num1 + num2
}

const valOFaddTN = addTN(2, 3); // function a value store korar jonno return keyword use kora hoy

// console.log(valOFaddTN);

// very importent function

let sumNumber = 0;
function calculateCartPrice(...num) {
  for (i = 0; i < num.length; i++) {
    sumNumber += num[i];
  }
  // console.log(sumNumber);
}
calculateCartPrice(100, 200, 300);

let sum = 0;
const arr = [200, 300, 400];

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// console.log(sum);

let initialNumber = 0;
const sumOFarray = arr.reduce((pre, curr) => pre + curr, initialNumber);
// console.log(sumOFarray);

// ================-->     break     <--======================

// jodi na bujo tahole 80 to 89 copy and paste chatGPT to explore
const cart = [
  { item: "Shirt", price: 500 },
  { item: "Pant", price: 900 },
];

const cartPriceSum = cart.reduce(
  (preNum, nextNum) => preNum + nextNum.price,
  0
);

console.log(cartPriceSum);

let sum_0 = 0;
for (let i = 0; i < cart.length; i++) {
  sum_0 += cart[i].price;
}
// console.log(sum_0);
