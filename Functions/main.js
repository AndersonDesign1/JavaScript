// //First you define the function
// function sayHello() {
//     console.log("Hello, World!");
// }

// // Then you call the function
// sayHello();
// sayHello();

// // This function greets the user by name and name is the parameter
// function greetUser(name) {
//     console.log("Hello, " + name + "!");
// }

// // Call the function with different names and "Alice" and "Bob" are arguments
// greetUser("Alice");
// greetUser("Bob");


// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(5, 12);


// // Return Statement
// function multiply(a, b) {
//     return a * b;
// }

// let product = multiply(4, 7);
// console.log("The product is: " + product);

// Function and ifElse sample of user loggedin and out message using functions, loops and simple variables
// function userGreeting(username, isLoggedIn){
//     if (isLoggedIn){
//         console.log(`Hello, ${username}!`);
//     }
//     else {
//         console.log(`Goodbye, ${username}!`);
//     }
// }

// //When User is logged in
// let currentUser = "Mr King";
// let loggedIn = true;

// userGreeting(currentUser, loggedIn);

// //When User is logged out
// loggedIn = false;
// userGreeting(currentUser, loggedIn);

// //ANother way to do loggedOut
// let formerUser = "Mr King";
// let loggedOut = false;

// userGreeting(formerUser, loggedOut);


// Without e6 Arrow functions
// // Return Statement
// function multiply(a, b) {
//     return a * b;
// }

// let product = multiply(4, 7);
// console.log("The product is: " + product);

// Arrow function version
// const multiplyArrow = (a, b) => {
//     return a * b;
// };

// More precised

const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(4, 7));
