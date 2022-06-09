switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
}
var a = 5;
switch (a) {
    case 0:
        console.log('case 0 executed');
        break;
    case 1:
        console.log('case 1 executed');
        break;
    case 2:
        console.log('case 2 executed');
        break;
    case 3:
        console.log('case 3 executed');
        break;
    case 4:
        console.log('case 4 executed');
    default:
        console.log('default case executed')
}

var str = "abcd";

switch (str) {
    case "steve":
        console.log("This is Steve");
        break;
    case "bill":
        console.log("This is Bill");
        break;
    case "john":
        console.log("This is John");
        break;
    default:
        console.log("Unknown Person");
        break;
}