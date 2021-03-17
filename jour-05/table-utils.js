/**## 03 - Separate Table

- Créez un fichier `table-utils.js`
- Mettez votre fonction `multiply` dans ce fichier, et ajouter en une deuxieme `addition` qui reprend le même principe mais avec une addition au lieu d'une multiplication
- Exportez les deux fonctions graces aux modules, et importez les dans votre fichier précedant pour refaire marcher votre code
- Affichez la table d'addition */

function multiply(num) {
    if (num == "") {
        console.log("error")
    }
    else if (isNaN(num)) {
        console.log("error")
​
    } else {
        for (i = 1; i <= 10; i++) {
            console.log(num + " fois " + i + "=" + num * i)
        }
    }
}
​
​
multiply(parseInt(process.argv[2]))