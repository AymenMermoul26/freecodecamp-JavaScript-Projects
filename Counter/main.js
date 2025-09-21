let btns = document.querySelectorAll(".btn");
let counter = document.querySelector(".counter");
console.log(btns);

let count = 0;


btns.forEach(item => {
    item.addEventListener('click', function (event) {
        let target = event.currentTarget.classList;
        if (target.contains("increase")) {
            count++;
        } else if (target.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }
        if (count > 0) {
            counter.style.color = "green"
        }
        else if (count < 0) {
            counter.style.color = "red";
        }
        else {
            counter.style.color = "black";

        }
        counter.textContent = count;

    })
})