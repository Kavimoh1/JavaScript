var y = 200; // Assign 100 to y
switch(y){ // switch is taking 'y' as a value
    // to validate
    case 300: // will check if y == 300
        console.log("this is 300");
        break;
    case 200: // will check if y == 200
        console.log("this is 200");
        break; // this will exit the switch block
    
    default: // if none of the condition is true
    // it will execute the default case
        console.log("This is the default case");
        break;
}



// FOR ALL NUMBERS LESS THAN 5,
// I WANT TO PRINT "LESS THAN 5"

// FOR ALL NUMBERS GREATER THAN 5,
// I WANT TO PRINT "GREATER THAN 5"
var y = 8; // Assign y as 2
switch(y) {
    case y > 1:
    case 2:
    case 3:
    case 4:
        console.log("LESS THAN 5");
        break;
    case 6:
    case 7:
    case 8:
    default:
        console.log("GREATER THAN 5");
}


var y = 50;
switch(y) {
case 10:
break;
case 50:
if(y + 2 == 52) {
console.log("Inside if block");
}
break;
}



var y = -2; // assign -2 to y
var z = true;
switch(z) { // initialze the switch statement 
    // with a number
    case y < 0: // y < 0 ---> true --> -2 != true
        console.log("less than 0");
        break;
    case 100:
        console.log(100);
        break;
    case 200:
        console.log(200);
        break;
    default:
        console.log("The default case");
        break;
}