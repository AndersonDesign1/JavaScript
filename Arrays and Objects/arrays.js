// // An Array of strings

// const favouriteFoods = ["Pizza", "Sushi", "Ice Cream", "Tacos"];

// // Accessing elements using their index
// console.log(favouriteFoods[0]); // Pizza
// console.log(favouriteFoods[1]); // Sushi
// console.log(favouriteFoods[2]); // Ice Cream
// console.log(favouriteFoods[3]); // Tacos

// // You can also change an element at a specific index
// favouriteFoods[1] = "Rice";
// console.log(favouriteFoods[1]); // Rice

// favouriteFoods[2] = "Chocolate";
// console.log("The array is now: " + favouriteFoods); // Chocolate


// const myPets = ["Dog", "Parrots", " Falcon"];
// console.log(myPets[1]);
// myPets[0] = "Goldfish";
// console.log(myPets);

// // Arrays Properties and Methods

// let colors = ["red", "green", "blue"];

// // .length property
// console.log("Array length: " + colors.length);

// // .push() method - adds to the end
// colors.push("yellow");
// console.log("After push: " + colors);

// // .pop() method - removes from the end
// colors.pop();
// console.log("After pop: " + colors);

// // .indexOf() method - finds the index of an item
// console.log("Index of 'green': " + colors.indexOf("green"));
// console.log("Index of '20': " + colors.indexOf(20)); // Not found, returns -1

// // Initialize an empty array
// let toDoList = [];
// toDoList.push("Buy Milk");
// toDoList.push("Do Laundry");
// console.log("To-Do List: " + toDoList);

// // Log the length of the to-do list
// console.log("Total tasks: " + toDoList.length);

// // Remove a task
// toDoList.pop();
// console.log("Updated To-Do List: " + toDoList);


// .forEach() method
const numbers = [1, 2, 3];

// We pass a function to forEach
// This function will be called for each number in the array

numbers.forEach(function(number, index){
    console.log(`Item at index ${index} is ${number}`)
});
