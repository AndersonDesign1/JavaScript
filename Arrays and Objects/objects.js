// // Oject describing a user 
// const user = {
//     firstName: "Anderson",
//     lastName: "Joseph",
//     age: 30,
//     isProgrammer: true,
//     favouriteLanguages: ["JavaScript", "TypeScript", "C"]
// };

// // 1. Accessing with Dot Notation
// console.log("First Name: " + user.firstName);
// console.log("Last Name: " + user.lastName);
// console.log("Age: " + user.age);

// // 2. Accessing with Bracket Notation
// console.log("First Name: " + user["firstName"]);
// console.log("Last Name: " + user["lastName"]);
// console.log("Age: " + user["age"]);

// // You can also add new properties
// user.country = "Nigeria";
// console.log(user);

// const myCar = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2021
// };

// // Log using dot notation

// console.log(`I drive a ${myCar.year} ${myCar.make} ${myCar.model}.`);


// Objects with method samples
// const person = {
//     name: "Ayomikun",
//     birthYear: 1990,
//     calculateAge:function(){
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.birthYear;
//     }
// }
    
// // Calling the method
// console.log(`I am ${person.calculateAge()} years old.`);

// Arrays of Objects

const students = [
    {id: 1, name: "John", grade: 90},
    {id: 2, name: "Jane", grade: 85},
    {id: 3, name: "Jim", grade: 88}
];

// Looping through the array of objects
students.forEach(student => {
    // For each student, access it's "name" and "grade" properties
    console.log(`${student.name} has a grade of ${student.grade}`);
});