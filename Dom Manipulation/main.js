// // Selecting elements

// // Select by ID
// const title = document.getElementById("title");

// // Select by class
// const items = document.getElementsByClassName("item");

// // Select by tag name
// const paragraphs = document.getElementsByTagName("p");

// // Modern way (Recommended)
// const title2 = document.querySelector("#title"); // by id
// const items2 = document.querySelector(".item"); // by class
// const allItems = document.querySelectorAll("h1"); // by all elements


// // Changing Content

// let title = document.querySelector("#title");

// // Change text
// title.textContent = "Hello DOM Manipulation";

// // Change HTML Inside
// title.innerHTML = "<em>Hello DOM Manipulation</em>";


// // // Changing Styles

// const title = document.querySelector("#title");

// // Change style
// title.style.color = "blue";
// title.style.fontSize = "50px";

// // Add/remove CSS classes
// title.classList.add("highlight");
// title.classList.remove("lowlight");


// // Events
// const btn = document.querySelector("#btn");
// const msg = document.querySelector("#msg");

// // Actual event listener code
// btn.addEventListener("click", () => {
//     msg.textContent = "You clicked the button!";
// });

// // Create element
// let newItem = document.createElement("li");
// newItem.textContent = "New List Item";

// // Append to list

// document.querySelector("ul").appendChild(newItem);

// // // Remove element

// // newItem.remove();

const input = document.querySelector("#nameInput");
const submitBtn = document.querySelector("#submitBtn");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", () => {
    const name = input.value; // allows you to get value from the input
    output.textContent = `Hello, ${name}!`;
});

