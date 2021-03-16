var example = require("./external.js");
​
console.log(example);
​
var {sayHelloInFrench, sayHelloInEnglish} = require("./external.js");
​
console.log(sayHelloInFrench());
​
​
// console.log(exemple.sayHelloInFrench());
// console.log(exemple.sayHelloInEnglish());
