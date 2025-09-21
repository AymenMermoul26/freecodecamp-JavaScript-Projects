const colors = ["red", "green", "blue", "rgb(12, 244, 209)", "#43e343", "#652e23", "#98ede3"];

let colorName = document.querySelector(".color");
let btn = document.getElementById("btn");


btn.addEventListener('click', function () {
    document.body.style.backgroundColor = colors[randomNumber()];
})

function randomNumber() {
    let random = Math.floor(Math.random() * colors.length);
    colorName.textContent = colors[random];
    return random;
}