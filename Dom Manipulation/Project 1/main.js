const btn = document.querySelector("#colorBtn");

btn.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}); 