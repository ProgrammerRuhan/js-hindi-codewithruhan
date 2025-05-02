// ================-->     Nullish Coalescing Operator (??) : Null Undefined    <--======================

let val;
// val = 3 ?? 10;
// val = null ?? 22 
// val = undefined ?? 12;
// val = undefined ?? null;
// val = null ?? undefined;
// val = null ?? 1101 ?? 33;
// console.log(val);

// ================-->     ternary operator    <--======================
const num = 2;
// num == "2" ? console.log("Equel") : console.log("Not Equel!");
// num === "2" ? console.log("Equel") : console.log("Not Equel!");

// break
for (let i = 1; i <= 10; i++) {
  //   console.log(`i is printed ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(j);
  }
}

// ************** break keyword
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // console.log("i is 5 detected!");
    break;
  }
  //   console.log(i);
}

// ************** "continue" keyword

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    // console.log(
    //   "i is 5 detected! But for the keyword of 'continue' 5 isn't printed."
    // );
    continue; // continue keyword er jonno 5 print na hoye baki sob gula print hobe
  }
  // console.log(i);
}

// ================-->     do/while loop    <--======================

let index = 0;
while (index <= 10) {
  // console.log(index);
  index = index + 1;
}

const arr = ["Banana", "Orange", "Mango", "Stobery"];

let i = 0;
while (i <= arr.length) {
  // console.log(arr[i]);
  i++;
}

// do loop
let score = 10012214; // jokon kono number k akbar holeo print korthe hobe tokon doWhile loop use kora better!!
do {
  // console.log(score);
  score++;
} while (score <= 10);

// ================-->     for of loop     <--======================
const arr1 = ["orange", "banana", "mango", "Pepe"];

for (const num of arr1) {
  // console.log(num);
}

for (const key in arr1) {
  // console.log(arr1[key]); // sudu key array er index ba position number dekhabe
}

// ================-->     for in loop     <--======================
const obj = {
  name: "John Doe",
  age: 26,
  eyeColor: "blue",
};

for (const key in obj) {
  // console.log(obj[key]);
}

// for (const key of obj) {
//   console.log(key); // eta error dekhabe karon forOf loop a object kaj kore na
// }

// ================-->     forEach loop     <--======================

const arr3 = ["BMW", "Volvo", "Ferari", "Audi"];

arr3.forEach((i) => {
  // console.log(i);
});

// stage1
function preF(item) {
  // console.log(item);
}

arr3.forEach(preF);

//stage2
arr3.forEach((item, index, fulArr) => {
  // console.log(item, index, fulArr);
});

//stage3

const arr4 = [
  {
    carName: "audi",
    edition: 2015,
  },
  {
    carName: "ferari",
    edition: 2017,
  },
  {
    carName: "bmw",
    edition: 2010,
  }
];

arr4.forEach((item) => {
  console.log(item.carName); // importent !!!
});
