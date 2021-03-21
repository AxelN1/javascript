function generatePassword(num) {
    var max = 122;
    var min = 48;
    var password = "";
    for (var i = 0; i < num; i++) {
        var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        while (randomIndex >= 58 && randomIndex <= 64) {
            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        }
        var letter = String.fromCharCode(randomIndex);
        password += letter;
    }

    console.log(password);
}

generatePassword(10);

//Another solution
var lettres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function generatePassword(num) {
    var password = []
    if (num < 6 || num > 15) {
        return "erreur";

    }
    else{
        for (var i = 0; i <= num; i++) {

            var max = lettres.length - 1
            var b = Math.floor(Math.random() * (max + 1))

            password.push(lettres[b])
        }

        return password.join("")
    }

}

var final= generatePassword(6)
console.log(final)