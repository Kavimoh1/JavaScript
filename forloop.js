for(var schoolClass=5; schoolClass <= 12;schoolClass++) {
    // INITIALIZATION -> var schoolClass=5
    // CONDITION -> schoolClass <= 12
    // OPERATION -> schoolClass++
    console.log("I am in class ", schoolClass);
}


for(var schoolClass=5; schoolClass <= 12;schoolClass++) {
    // INITIALIZATION -> var schoolClass=5
    // CONDITION -> schoolClass <= 12
    // OPERATION -> schoolClass++
    if(schoolClass==10){
    console.log("I am in class ", schoolClass);
    }
}

for(var schoolClass=5; schoolClass <= 7;schoolClass++) {
    console.log("I am in class ", schoolClass);
} // this will terminate the loop once the student is in class 8
console.log("After the for loop");


// for(var schoolClass=5; ;schoolClass++) { // there is no
//     // stopping condition in my code
//     console.log("I am in class ", schoolClass);
// } // so the only way to stop this is to press CTRL+C

// console.log("After the for loop");
var a=1;
for(;a<=10;a++){
    console.log(a);

}
  //we can declare initialization outside the for loop
for(;a<=15;a++){
    console.log(a);
    
}
