var a=100;
{// scope
   let a=200;
   a=3*a;
   console.log(a);
}
console.log(a);