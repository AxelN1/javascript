// Bonus

var random = Math.floor(Math.random() * (6 - 1 + 1) + 1);

if (random === 6) {
    console.log("Yes I win !")
} else {
    console.log("So close")
}

// Bonus II

var month = "January"

switch (month) {
    case "January":
            console.log("Winter");
        break;
    case "February":
            console.log("Winter");
        break;

    case "March":
            console.log("Spring");
        break;

    case "April":
            console.log("Spring");
        break;

    case "May":
            console.log("Spring");
        break;    
    case "June":
            console.log("Summer");
        break;
    case "July":
            console.log("Summer");
        break;

    case "August":
            console.log("Summer");
        break;

    case "September":
            console.log("Fall");
        break;

    case "October":
            console.log("Fall");
        break;
    case "November":
            console.log("Fall");
        break;

    case "December":
            console.log("Winter");
        break;   
    default:
        break;
}