// var max = 20;

// for (var i = 0; i <= max; i++) {

//     if(i >= 5) {
//         console.log(i + i);
//     } 
//     else {
//         console.log(i);
//     }
// }

var sum = 0;
var min = 1;
var max = 6;
//for (var i = 0; i < 20; i++) {
for (var i = 1; i <= 20; i++) {
    var dice = Math.floor(Math.random() * (max - min + 1) + min); // 1 2 3 4 5 ou 6
    if (dice >= 5) {
        sum += dice;
    }
}

console.log(sum);