// 01 - Hello World

console.log("Hello World !");

// 02 - String

var test = "My name is Namujimbo";
console.log(test);

// 03 - Concatenation

var name = "Axel";
console.log("Nice to meet you" + " " + name);

// 04 - String Length

var testLength = "I'm very long !";
console.log(testLength.length);

// 05 - Replace

var food = "croissant is meh";
food = food.replace("meh", "so good");
console.log(food);

// 06 - Up and Down

var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();

console.log(basic);
console.log(basicUp);
console.log(basicDown);

// 07 - Split

var word = "banana";
var letters = ['b', 'a', 'n', 'a', 'n', 'a'];
console.log(letters);

// 08 - Template

var age = 24;
var template = `I'm ${age} years old`;
console.log(template);

// Bonus

var complexString = 'Citation d\'aujourd\'hui: \"Le js c\'est cool !\"';
console.log(complexString);

var bonjour = "Bonjour";
console.log(bonjour.replace(/o/g, "a"));