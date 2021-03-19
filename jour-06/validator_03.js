/**
 * ## 03 - Validator

- À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
- La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
    - l'email doit être au bon format
    - le username ne doit comporter que des lettres, chiffres et tirets (les petits)
    - le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
- Si tout est bon, elle retourne "All good !", sinon elle retourne "error"
 */

var prompt = require('prompt');




prompt.start();
function checkProfile() {
    var email;
    var username;
    var password;  
}
prompt.get([{
    name: 'email',
    description: 'Email',     
    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Doit être au bon format',
    // required: true
}, 

{
    name: 'username',
    description: 'Username',     
    pattern: /^[a-zA-Z0-9\s\-]+$/,
    message: 'Ne doit comporter que des lettres, chiffres et tirets',
    // required: true
}, 

{
    name: 'password',
    description: 'Password',     
    type: 'string',                 
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,                 
    message: 'Doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets',
    // required: true
}

],

    function (err, res) {
        console.log('-- Données reçues --');
        console.log(' email: ' + res.email)
        console.log(' username: ' + res.username);
        console.log(' password: ' + res.password);
    });