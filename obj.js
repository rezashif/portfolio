//object with new keyboard
let student = new Object();
student.stu_i=1234
student.name = "John";
console.log(student);

let person={
age:25,
name:'abc',
ph_no:'1111-1111-1111'
}

//inserting person
person.location="Vadodara"
console.log(person);

console.log("updated person");
person.name='xyz'
console.log(person);

for(let i in person){
console.log(i);
}