// console.log("abcd");

// function greet(){
//     console.log("cdcd");
// }
// console.log("fff");
// greet();

function greet(message, nameoftheperson){
    //var greetmessage="hello,"+" "+message+"  "+nameoftheperson;
    var greetmessage= `hello, ${message} ${nameoftheperson}`;
    console.log(greetmessage);
}
function greet(message, nameoftheperson, number){
    var greetmessage=number+"  "+"hello,"+" "+message+"  "+nameoftheperson;
   // var greetmessage= `hello, ${message} ${nameoftheperson}`;
    console.log(greetmessage);
}


greet("good morning");