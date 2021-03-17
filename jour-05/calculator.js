var prompt = require("prompt");
​
prompt.start();  // démarre le prompt
​
function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}
​
var num1 = "";
var num2 = "";
var option = "";
​
prompt.get(["numberA", "numberB", "option"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
    return onErr(err);
  }
​
  num1 = res.numberA;;
  num2 = res.numberB;
  option = res.option;
​
  // console.log(num1);
  // console.log(num2);
  // console.log(option);
​
  calculate(option, num1, num2);
​
});
​
function calculate(op, num1, num2) {
  // console.log(num1);
  // console.log(num2);
  // console.log(op);
​
  if (isNaN(num1)) {
    console.log("Error");
​
  } else if (isNaN(num2)) {
    console.log("Error");
​
  } else if (op == "") {
    console.log("Error");
​
  } else {
    if (op === "*") {
      console.log(num1 * num2);
    } else if (op === "+") {
      console.log(+num1 + +num2);   // IMPORTANT method to add to numbers instead of cancatination
    } else if (op === "-") {
      console.log(num1 - num2);
    } else if (op === "/") {
      console.log(num1 / num2);
    } else {
      console.log("Error");
    }
  }
}