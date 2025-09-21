const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let colorName = document.querySelector(".color");
let btn = document.getElementById("btn");




btn.addEventListener('click', function () {
    let color = randomeHexCode();
    document.body.style.backgroundColor = color;
    colorName.textContent = color;
})

function randomeHexCode() {
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.trunc(Math.random() * hex.length)];
    }
    console.log(hexCode);
    return hexCode;
}


