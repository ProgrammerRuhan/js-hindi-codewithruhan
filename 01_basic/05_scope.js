// { } eta k scope bole

if (true) {
    let a = 10;
    const b = 20;
    c = 30;
    c = 30;
  }
  
  // console.log(a);
  // console.log(b);
  // console.log(c);
  
  // ================-->     break     <--======================
  
  function one() {
    function two() {
      console.log("TWO");
    }
  
    two();
  }
  
  // one();
  
  // ================-->     break     <--======================
  
  const user = {
    userName: "RuhanIslam",
    age: 21,
  
    wellcomeMessage: function call() {
      console.log(`this is user ${this.userName} `); // this keyword
    },
  };
  
  // user.wellcomeMessage(); // only user.wellcomeMessage not work you should use ()
  
  // IIFE
  
  (function chaiUr() {
    // console.log("IIFE Function one!");
  })();
  
  (chaiF = (val) => {
    // console.log(val);
  })("This is Arrow IIFE Function");
  
  // Watch this for more information of IIFE => https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24
  
  // ================-->     loop || conditions    <--======================
  
  // put 0, 1, " ", "", false, true, undefined, null
  if (true) {
    // console.log("it's true!!");
  } else {
    console.log("it's false");
  }
  
  if (2 === "2") {
    console.log("Executed@!!1111111"); // eta true na tai exicuted hobe na true na tar karon 2 number and "2" is a string so the type of this object are not same
  }
  if (2 == "2") {
    // console.log("Executed@!!2222222222");
  }
  
  if (2 != 3) {
    // console.log('hehehe');
  }
  
  const conditions = "milgeya to code exicute hoyega";
  
  switch (conditions) {
    case 300:
      console.log("gratter then 300");
  
      break;
    case "milgeya to code exicute hoyega":
      // console.log("Code is exicuted!!");
  
      break;
  
    default:
      console.log(" not match");
  
      break;
  }
  
  // ================-->     loop || conditions    <--======================
  
  const arr = ["Orange", "Mango", "Banana", "PineApple"];
  const arr11111 = [];
  
  if (arr11111.length === 0) {
    // console.log("Array is empty!!");
  } else console.log("Array Isn't empty!!");
  
  const object = {
    name: "orange",
    date: 23,
  };
  const object1111 = {};
  
  // console.log(Object.keys(object)); // eta array return kortise so now we can use dot.length property
  
  if (Object.keys(object1111).length === 0) {
    // console.log("Object is Empty!!");
  } else console.log("Object isn't Empty!!");
  