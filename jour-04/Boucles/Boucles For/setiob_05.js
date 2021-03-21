var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);

// i !== 0 ? oui
// j'affiche 12
// i ! == 0 ? oui
// j'affiche 24
// i ! == 0 ? oui
// j'affiche 33
// i !== 0 ? oui
// j'affiche 39
// i ! == 0 ? non
// j'affiche 42
// j'affiche 0
