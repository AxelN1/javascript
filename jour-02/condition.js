// 06 - Condition

var limit = 50;
var score = 64;

if (score >= limit) {
    console.log("Ok good !")
} else {
    console.log("Oh noooo...")
}

// 07 - Condition II

var password = "azerty";

if (password.length > 5) {
    console.log("The password is secure")
}

// 08 - Condition III

if (score >= limit && password.length == 6) {
    console.log("Everything is good")
} else if (score >= limit || password.length === 5) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}