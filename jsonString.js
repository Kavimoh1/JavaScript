var person={
    name:'manoj',
    age :20,
    employee:{
        id:200,
        role:'soft eng',
        duration:2,
        salary:{
            rupee:1000,
            hike:'none'
        }
    }
}
console.log(person);
var personinString = JSON.stringify(person);
console.log(personinString);