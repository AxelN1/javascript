// var dice = null;
// var count = 0;

// while (dice < 6) {
    
//     if (dice !== 6) {
//         console.log( Math.floor(Math.random() * 6 - count) + 1);
//         // console.log(count);
//     }
//     dice++;
// }

var dice = null;
var count = 0;
var min = 1;
var max = 6;
while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min); // 1 2 3 4 5 ou 6
    count++;
}

console.log(count);