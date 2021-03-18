/** 02 - Age

- Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
- La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
- Appelez la fonction et affichez son résultat dans la console

Rappel : Les dates commencent à l'année 1970 !} y 
 */

function calculateAge(y) {
    var age = new Date(y);
    var toto = age.getFullYear();
    console.log(toto);
    var v = new Date();
    var now = v.getFullYear();
    console.log(now);

    var ageActuel = now - toto;
    var rt = (1 + age.getMonth());
    var nrt = (1 + v.getMonth());
    
    if (nrt - rt < 0) {
        console.log(ageActuel - 1);
    } else {
        console.log(ageActuel);
    }
}

calculateAge("1996-12-14");