var shouldNotBeRaining = true
var shoesShouldBePolished = true
var z = shouldNotBeRaining && shoesShouldBePolished
console.log(z);

// TRUE && TRUE —> TRUE [Will go to school]
// FALSE && TRUE —> FALSE [Will not go to school]
// TRUE && FALSE —> F
//F && F --> F
// &--Ampersand
// &&--And


var shouldNotBeRaining = true
var shoesShouldBePolished = false
var z = shouldNotBeRaining || shoesShouldBePolished
console.log(z);
//  || -- OR
// T +T --- T
// T + F--- T
// F + T--- T
// F + F--- F


var x = 100; // number type
var z = "100"; // string type
console.log(x == z); // checking for equality
console.log(x + 1, "--", z + 1);
var zz = "suhail";
console.log(zz + 1);


var x = 100; // number type
var z = "100"; // string type
var tX = typeof x;
var tZ = typeof z;
console.log(tX, "...", tZ);



var x = 100; // number type
var z = "100"; // string type
var tX = typeof x;
var tZ = typeof z;
console.log(x == z);
console.log(x === z); // says false
// because although the values are equal
// types are not. one is of number and another
// is of