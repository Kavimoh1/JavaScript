var student= {
    'name':'Mohan',
    'age':29,
    'class':'12th',
    'weight': 50
}
console.log(student);
console.log(student['class']);

for(var nameofkey in student){
    console.log(nameofkey, "...", student[nameofkey]);
}