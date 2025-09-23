let openBtn = document.getElementById('open-btn');
let closeBtn = document.querySelector('.close-btn')
let model = document.querySelector(".modal");



openBtn.addEventListener("click", function () {
    model.classList.add("visibil")
})

closeBtn.addEventListener("click", function () {
    model.classList.remove("visibil")
})