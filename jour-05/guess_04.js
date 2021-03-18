var numStart = 1;
var numEnd = 100;
var playerNum = 0;

var prompt = require("prompt");

prompt.start();

prompt.get(["Quel est le nombre le mystère ?"], function (err, res) {
    if (err) {
        return onerror(err);    
    }

    var playerNum = res;
    
    if (isNaN(playerNum['Quel est le nombre mystère ?'])) { 
        console.log("Error1", playerNum);           
    } else {
        play(numStart, numEnd);     
    }

});