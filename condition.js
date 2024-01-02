var x = 100; // making x as 100
var y = 100; // making y as 100

var z = x == y; // Is x EQUAL-TO y?
console.log(z); // Should say TRUE
var zz = x != y; // Is X NOT-EQUAL-TO y?
console.log(zz); // Should say FALSE
// because x and y are both equal
//= --> MEANS ASSIGNMENT
// ! means "NOT"
//== --> CHECK FOR EQUALITY


var isRaining = true; // which means it is raining
var x = !isRaining; // adding the NOT OPERATOR
// with the boolean type 'isRaining'
console.log(x); // the output will be a negation
// of the value inside isRaining


var isRaining = true; // which means it is raining
// have assigned a boolean to isRaining
var x = !!isRaining;
// NOT operator is meant to negate whatever
// is present in the SUFFIX
// !isRaining --> !true -> false
// !false --> true
console.log(x);

//true is the keyword with Javascript and True is not. You cannot start a boolean value (true / false) with the capital letter.


var x = 100;
var y = 100;
var z = x > y; // this is an equality check
// 100 > 100
console.log(z); // here FALSE is expected
// because 100 is not greater than 100
// but equal to 100
var zz = x >=y // greater than OR equal to y
// Short form for X


var x = 100;
var z = 99;
console.log(x <= z); // should print
// false, because none of the condition
// holds true