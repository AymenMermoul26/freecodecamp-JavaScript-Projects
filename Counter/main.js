let decreasBtn = document.querySelector(".decrease");
let increaseBtn = document.querySelector(".increase");
let resetBtn = document.querySelector(".reset");
let counter = document.querySelector(".counter")


let i = 0;
counter.style.fontSize = "35px"
counter.style.fontWeight = 'bold'
counter.textContent = i;

resetBtn.addEventListener('click', function () {
    i = 0;
    counter.textContent = i;
    chackTheSign()
})

increaseBtn.addEventListener('click', function () {
    i++;
    counter.textContent = i;
    chackTheSign();
})

decreasBtn.addEventListener('click', function () {
    i--;
    counter.textContent = i;
    chackTheSign();
})

function chackTheSign() {
    if (i > 0) {
        counter.style.color = "green";
    } else if (i < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";

    }
}

