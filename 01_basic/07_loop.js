const arr = ["js", "ruby", "java", "python", "cpp"];

arr.forEach((item) => {
  //   console.log(item);
});

let inputVal = "ruby";
if (arr.includes(inputVal)) {
  //   console.log(`"${inputVal}" is founded`);
} else console.log(`"${inputVal}" is not founs.`);

let valueOfNums1 = arr.filter((num) => num != arr[1]);
// console.log(valueOfNums1);

// break
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valueOfNums = nums.filter((num) => {
  return num > 4;
  // scop ba {} eita bebohar korle return keyword use kora lage noyto vlaue dekay na onnothay na korleo chole jmn line number 8
  //   return num != "ruby";
});

// console.log(valueOfNums);

const newNums = [];

nums.forEach((num) => {
  if (num > 3) {
    newNums.push(num);
  }
});

// console.log(newNums);

// break
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of nums1) {
  //   console.log(num + 10);
}

// nums1.forEach((num) => console.log(num + 10));

let valueOfNum = nums1.map((num) => num + 10);

// console.log(valueOfNum);

// break
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// chainning method
const filtarNums = nums2
  .map((num) => num + 10)
  .map((num) => num * 2)
  .filter((num) => num >= 30);
// console.log(filtarNums);

// break
let val = nums2.reduce((acc, curr) => acc + curr, 0);
// console.log(val);

const arr_obj = [
  {
    courseName: "js coars",
    price: 500,
  },
  {
    courseName: "py coars",
    price: 100,
  },
  {
    courseName: "t-shirt",
    price: 200,
  },
];

let totalAmount = arr_obj.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalAmount);
 