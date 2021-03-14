var dice = null;
var count = 0;

while (dice < 6) {
    
    if (dice !== 6) {
        console.log( Math.floor(Math.random() * 6 - count) + 1);
        // console.log(count);
    }
    dice++;
}