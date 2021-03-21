var usainBolt = 0;
var tysonGay = 0;
var min = 1;
var max = 10;

while (usainBolt < 100 || tysonGay < 100) {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    usainBolt += number1;
    tysonGay += number2;

    console.log("Usain Bolt", usainBolt);
    console.log("Tyson Gay", tysonGay);
}

/*do {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    ussainBolt += number1;
    tysonGay += number2;
} while (ussainBolt < 100 || tysonGay < 100);*/

if (usainBolt > tysonGay) {
    console.log("Le vainqueur est Usain Bolt");
} else if (tysonGay > usainBolt) {
    console.log("Le vainqueur est Tyson Gay");
} else {
    console.log("Egalité !");
}