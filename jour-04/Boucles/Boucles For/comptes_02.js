var min = 100;
var max = 1000;

for (min; min <= max; min++) {
    
    var result = min % 7 == 0;

    if (result == true) {
        console.log(min);
    }
}