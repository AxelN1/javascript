var sentence = "Hello Konexio !";
var myArray = sentence.split("");

console.log(myArray);

for (var i = 0; i < myArray.length; i++) {
    var item = myArray[i];

    console.log("item", item);

    result.unshift(item);
}

console.log(result.join(""));