// Get elements
const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const loginBtn = document.getElementById("loginBtn");
const messageDiv = document.getElementById("message");

// When button is clicked
loginBtn.addEventListener("click", function () {
    let name = nameInput.value.trim(); // remove extra spaces
    let role = roleInput.value; // "user" or "admin"

    // If name is empty
    if (!name) {
        messageDiv.textContent = "Please enter your name.";
        messageDiv.classList.remove("text-green-600");
        messageDiv.classList.add("text-red-600");
        return;
    }

    // Show different message based on role
    if (role === "admin") {
        messageDiv.textContent = `Welcome back, Admin ${name}! You have full access.`;
    } else {
        messageDiv.textContent = `Welcome, ${name}! Enjoy browsing.`;
    }

    // Style success message
    messageDiv.classList.remove("text-red-600");
    messageDiv.classList.add("text-green-600");
});