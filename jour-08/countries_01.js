var request = require("request")

var countriesNames = [];

request.get("https://restcountries.eu/rest/v1/all", function (err, res, body) {

    var getCountries = JSON.parse(body);
    console.log(typeof countries);
    var names = getCountries.map(function (country) {
        return country.name
    });

    console.log(names.join("-"));

});