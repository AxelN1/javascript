// 01 - Calculator
​
// - Créez une fonction `calculate` qui recevra trois paramètres (deux nombres entiers et un opérateur `+`, `-`, `x`, `/` ou `%`)
// - Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
// - Affichez le résultat dans la console (vérifiez que pour les arguments `5`, `x` et `4` vous obtenez bien `20`)
// - Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
​
//     ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console
​
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
prompt.get(["number1", "number2", "operation"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
		return onErr(err);
	}
​
  console.log("Données reçues :");
  console.log("=> number1 : " + res.num1); // affiche le résultat pour la propriété "num1"
  console.log("=> number2 : " + res.num2); // affiche le résultat pour la propriété "num2"
  console.log("=> operation : " + res.operation); // affiche le résultat pour la propriété "operation"
});
​
​
​
calculate(operation, num1, num2);
​
function calculate(op, num1, num2) {
​
  console.log(op, num1, num2);
​
}
