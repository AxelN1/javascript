var grid = [
    ["N", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
console.log(typeof grid)
// console.log(grid.join('\n'))

var rover = {
    direction : "N",
    x : 0,
    y : 0,
    travelLog : []
}


// console.log(rover)

// Fonction pour tourner à droite

function turnRight (rover) {
    if (rover.direction === "N") {
        rover.direction = "E"
    } else if (rover.direction === "E") {
        rover.direction = "S"
    } else if (rover.direction === "S") {
        rover.direction = "W"
    } else {
        rover.direction = "N"
    }

    // console.log(rover.direction)
}

// turnRight(rover)



// Fonction pour tourner à gauche

function turnLeft (rover) {
    if (rover.direction === "N") {
        rover.direction = "W"
    } else if (rover.direction === "W") {
        rover.direction = "S"
    } else if (rover.direction === "S") {
        rover.direction = "E"
    } else {
        rover.direction = "N"
    }


    // console.log(rover)
}

// turnLeft(rover)



// Fonction pour avancer

function moveForward (rover) {
    if (rover.direction === "E" && rover.x < 9) {
        rover.x++
    } else if (rover.direction === "W" && rover.x > 0) {
        rover.x--;
    } else if (rover.direction === "S" && rover.y < 9) {
        rover.y++;
    } else if (rover.direction === "N" && rover.y > 0) {
        rover.y--;
    } else {
        console.log("Oups! Il est tombé dans le vide !! " + rover.direction);
        return
    }



    // console.log(rover.direction)


}

// moveForward(rover)

// Fonction pour reculer


function moveBackWard(rover) {
    if (rover.direction === "N" && rover.y < 9) {
        rover.y++;
    } else if (rover.direction === "S" && rover.y > 0) {
        rover.y--;
    } else if (rover.direction === "E" && rover.x > 0) {
        rover.x--;
    } else if (rover.direction === "W" && rover.x < 9) {
        rover.x++;
    } 
    else {
    return console.log("Oups! Il est tombé dans le vide en marche arrière !!")
    }
}

// moveBackWard(rover);


// Fonction outil

function pilotRover(pilot) {

    for (var i = 0; i < pilot.length; i++) {

        if (pilot[i] === "l") {
            turnLeft(rover);
        } else if (pilot[i] === "r") {
            turnRight(rover);
        } else if (pilot[i] === "f") {

            if (i++) {
                grid[0][1] = rover.direction;
            }

        } else if (pilot[i] === "b") {
            moveBackWard(rover)
        } else {
            
            return console.log("Erreur : Touche inconnue")

        }

        console.log(rover.direction)
    }

    console.log(grid.join('\n'), rover.direction);
}





pilotRover(rover)
    var prompt = require("prompt");
    var option = {
        name : "direction",
        validator : /^[a-zA-Z]/,
        description : "Utiliser l, r, f et b",
    }

    prompt.get(option, function (err, res) {

        if (err) {
            console.error(err);
            return
        } 
        else {
            pilotRover(res.direction)
        }

    })