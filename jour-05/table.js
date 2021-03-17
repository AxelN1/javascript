// 02 - Table
​
// - Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
// - Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
// - Vous devrez donner l'argument dans le terminal en appelant le programme
​
//     ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console
​
var prompt = require("prompt");
​
prompt.start();  // démarre le prompt
​
function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return;
}
​
var num1 = "";
var num2 = "";
var option = "";
​
prompt.get(["numberA"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
    if (err) {
        return onErr(err);
    }
​
    num1 = res.numberA;
​
    // console.log(num1);
​
    multiply(num1);
​
});
​
function multiply(num1) {
    // console.log(num1);
​
​
    if (num1 == "") {       // check for empty 
        console.log("Error");
    } else if (isNaN(num1)) {   // check is number or not
        console.log("Not a number - Error");
    } else {
        for (i = 1; i <= 10; i++) {
            console.log(i + " X " + num1 + " = " + (i * num1)); // prepare table
        }
    }
}