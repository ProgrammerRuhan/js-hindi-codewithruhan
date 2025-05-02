const Arr1 = ["Fish", "Cat", "bulf", "Bird"];
const Arr2 = ["Orang", "Banana", "Mango"];
// kono kisu k array te rupantor korar jonno Array.from("class_name")
let str = "this is string";
let arrStr = Array.from(str);
console.log(str);
console.log(typeof str);
console.log(arrStr);
// arrStr.map() array sokol subidha paoya jabe

// const allArr = Arr1.push(Arr2); // array vitore array toiri kore
const allArr = Arr1.concat(Arr2);
// console.log(allArr);

// to concat two or more then array use this methods for proffetionals

const allArr2 = [...Arr1, ...Arr2];
// console.log(allArr2);

const hard_arr = [1, 2, 3, [2, 2, 2], [3, 3, 3, [4, 4, 4]]];

let flatArr = hard_arr.flat(Infinity);
// console.log(flatArr);

// console.log(hard_arr);

let a = "a";
let b = "b";
let c = "c";

// console.log(Array.of(a, b, c));

// ================-->     Object in js     <--======================
// to learn JS object is must and event

const mySym = Symbol("keys");
const myObject = {
  name: "object",
  type: "JS Function",
  [mySym]: "this is symble value",
  valid: true,
  timeOf: 20040,
  docu: ["object", false, 22],
};

myObject.name = "i change the name of 'object' to it"; // object er vitorer value k change korar jonno
// console.log(myObject);

// console.table(myObject["docu"]); // this is recomanded
// console.table(myObject.docu);
// console.log(myObject[mySym]);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

Object.freeze(obj2);

obj2[3] = "you can't show the change";
// console.log(obj2);

const spratObject = Object.assign(obj1, obj2, obj3);
const spratObject1 = { ...obj1, ...obj2, ...obj3 }; // this is recomanded
// console.log(spratObject1); //****

// console.log(obj2);

const obj = [
  {
    name: "ruhan",
    age: 21,
  },
  {
    name: "ruhan",
    age: 21,
  },
  {
    name: "ruhan",
    age: 21,
  },
];

// console.log(obj[1].age); // object er vitorer array er element k access korar jonno

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

const myInfo = {
  name: "ruhan",
  age: 21,
  islogedIn: true,
};

const { age, islogedIn } = myInfo;

// console.log(name);
