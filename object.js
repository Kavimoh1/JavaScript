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
// console.log(person);
// console.log(person.employee);
// console.log(person.employee.salary.rupee);

//another way to write

// console.log(person);
// console.log(person['age']);
// console.log(person['employee']);
console.log(person['employee']['salary']['rupee']);