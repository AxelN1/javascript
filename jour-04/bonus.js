function generatePassword(num) {
// console.log(num)
// var letter = num.length
return (Math.random(num.length))
 
    if (num.length < 6 && num.length > 15) {
        console.log("error");
    }

}

generatePassword();


/**- Créez une fonction `generatePassword` qui reçoit un paramètre `num`
- La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
- Le mot de passe contiendra uniquement des lettres majuscules
- Si `num` est plus petit que 6 et plus grand que 15, la fonction retourne "error"

Astuce : Vous vous souvenez de la table ASCII ? 😉 */


// function randPassword(letters, numbers, either) {
//     var chars = [
//      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // letters
//      "0123456789", // numbers
//      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" // either
//     ];
  
//     return [letters, numbers, either].map(function(len, i) {
//       return Array(len).fill(chars[i]).map(function(x) {
//         return x[Math.floor(Math.random() * x.length)];
//       }).join('');
//     }).concat().join('').split('').sort(function(){
//       return 0.5-Math.random();
//     }).join('')
//   }