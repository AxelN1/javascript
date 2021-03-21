// var min = 100;
// var max = 1000;

// for (min; min <= max; min++) {
    
//     var result = min % 7 == 0;

//     if (result == true) {
//         console.log(min);
//     }
// }

var count = 0;
for (var i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        count++;
        // count += 1;
        // count = count + 1;
    }
}

console.log(count);