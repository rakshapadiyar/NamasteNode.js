//const req = require("express/lib/request.js");

// require("./xyz.js");
// var a = 10;
// var b = 20;
// console.log("Namaste Node.js");
// console.log(a + b);

// console.log(global);
// console.log(this); // {}
// console.log(globalThis); //same global obj

// console.log(global === globalThis); //true
//require("./xyz.js");

const {calculateSum,mul} = require("./calculate");
const data = require("./data.json")
console.log(data);
//var obj = require("./sum.js");
//import { calculateSum, x } from "./sum.js ";
console.log("sum of 10 and 20 is ", calculateSum(10, 20));
console.log("prod of 10 and 20 is ", mul(10, 20));

// console.log(obj.ab);
