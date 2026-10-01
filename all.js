//Date and time
// let today = new Date();
// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDate());
// console.log(today.getDay());
 

//json

// const person = {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
    
// }

//jspn stringify

// let student = {
//     name: "Shashank Patel",
//     age: 20,
// }
// let data = JSON.stringify(student);
// console.log(data);
//we can use JSON.parse() to convert a JSON string back into a JavaScript object. For example:

// let jsonString = '{"name":"Shashank Patel","age":20}';
//we cant change the value of a property in a JSON string directly. JSON is a data format, and once you have a JSON string, it is immutable. If you want to change the value of a property, you need to parse the JSON string into a JavaScript object, modify the object, and then convert it back to a JSON string if needed.

//map
// let students = new Map();
// students.set("name", "Shashank Patel");
// students.set("age", 20);
// students.set("course", "B.Tech IT");
//get
// console.log(students.get("name")); 
//check
// console.log(students.has("20"));
//delete
// console.log(students.delete("course"));
//size
// console.log(students.size); 


//set
let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(1);
console.log(numbers);