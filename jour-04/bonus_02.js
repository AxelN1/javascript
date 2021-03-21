function launchDice(numberOfDice) {
    var min = 1;
    var max = 6;
    var sum = 0;

    for (var i = 0; i < numberOfDice; i++) {
        var dice = Math.floor(Math.random() * (max - min + 1) + min);

        sum += dice;
    }

    return sum;
}

var joueur1 = launchDice(5);
var joueur2 = launchDice(5);

if (joueur1 > joueur2) {
    console.log("Joueur 1 a gagné")
} else if (joueur1 < joueur2) {
    console.log("Joueur 2 a gagné")
} else {
    console.log("Egalité");
}