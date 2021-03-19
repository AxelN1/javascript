var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) { // i = 12 car il commence à 12
    box1 = box2; // 12 de box1 devient 5 de box2
    console.log(box1 + box2); // Le résultat sera 10 parce que la valeur de box1 qui était 12 est désormais égale à celle de la box2, qui est 5
    box2 = box1 + i; // 5 de box2 devient 5 de box1 + 12 de i. Donc 17
}                       
console.log(box1); // Le résultat sera 17
console.log(box2); // Le résultat sera la somme de 17 + 13, donc 30. Car la boucle est passée de 12 à 13 avant d'atteindre sa fin qui est 14 
console.log(i); // Le résultat sera 14 car c'est la fin de la boucle i