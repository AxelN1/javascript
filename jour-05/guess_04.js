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

function onErr(err) {
        console.log(err);
        return;
    }

    function play(numStart, numEnd) {

        var numRdm = Math.floor(Math.random() * (numEnd - numStart) + 1)

        console.log(numRdm);

        counter++;

        if (playerNum < (numRdm)) {
            console.log("C'est moins!");
        } else if (playerNum > (numRdm)) {
            console.log("C'est plus!");
        } else if (playerNum = (numRdm)) {
            console.log("Bravo !!");
        }

        if (counter <= 2) {
            startPlay();
        }
    }

startPlay();