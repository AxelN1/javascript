// À l'aide de l'url suivante : "https://restcountries.eu/rest/v1/all" :
// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret

var request = require("request")

var countriesNames = [];

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

    var getCountries = JSON.parse(body);
    console.log(typeof countries);
    // function getCountries = () {};
    var names = getCountries.map(function (country) {
        return country.name
    });

    console.log(names.join("-"));

    // console.log("country :", countriesNames[0].name);

    // console.log("capital :", result[0].capital);

    // if (body.name) {
    //     countriesNames = result
    // console.log("country :", countriesNames);
    // }

});

// console.log("country :", countriesNames[0].name);















// var request = require("request");

// request.get("https://restcountries.eu/rest/v2/all", function (err, res, body) {
//     // console.log(err);
//     console.log(res.statusCode);
//     // console.log(body);
// });