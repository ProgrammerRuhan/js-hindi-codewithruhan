// null mane kissu nai
// undefined mane kono kisu defined kora hoyni

const accountId = 123456;
let accountEmail = "ruhan@google.com";
var accountPassword = "3323rree";
accountCity = "Rangpur";

// accountId = 442332 //error dekhabe karon constant varriables
accountEmail = 2332;

function errorChecker(key) {
  console.log(key);
}

// errorChecker(accountId); // uporer variable ekhane lekeh check koro

// ================-->     Data Type     <--======================

// there are two type of dataType primitive, non-primitive
// premitive 7 type like :- String, Number, Boolean, Null, Undefined, Symble, BiggInt

// non-primitive :- Array, Object, Function

// Array jeta squere bracket a thake
const myIntro = ["ruhan", 232, true];

// object jeta curley breches e thake
let obj = {
  name: "ruhan",
  age: 21,
  islogedIN: false,
};

// number => 1234;
// bigInt => boro number ba boro songkha
// string => "this is a string";
// boolean => true/false
// null => kissu nai;
// undefined => nothing defined(like let userName;)
// symble => unique
// object
// alert('hlw') // show error

let scor = "12";
let changeSor = Number(scor);
// console.log(scor);
// console.log(changeSor);

// console.log(typeof changeSor);
// console.log(typeof scor);

let scor1 = Number("ss");
let scor2 = Number(null);
// console.log(scor2); // null soman eta 0 dekhabe

function errorChecker(key) {
  console.log(typeof key);
  console.log(key);
}

// errorChecker(scor1)

// let isLogIn = ' ';
// let isLogIn = 1;
// let isLogIn = 0;

// let change_value = Boolean(isLogIn);
// console.log(change_value);

// ================-->     Operations     <--======================

let nmbr = 3;
let negiNmbr = -nmbr;
// console.log(negiNmbr);
// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2); // all are the besic operations

// this is for only learning purpose not for realLife
// console.log("1" + 2);
// console.log("1" + 2 + 2); // you may though it 14 but no!
// console.log(1 + 2 + "2"); // you may though it 122 but no!

let a = 3;
let b = ++a;
// console.log(b);
// console.log(a);

// ================-->     Comperision     <--======================
// console.log(2 > 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("21" > 12); // jokhon "21a" mane string er sathe number comperision hobe tokon result false dekhabe onnothay true

let val1 = "ruhanIsaProgrammer";
let val = val1;
val = "OnLy Ruhan";

// console.log(val);
// console.log(val1);
