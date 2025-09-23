let cancel = document.getElementById("cancel");
let menu = document.getElementById("menu");

let sidebar = document.getElementById("sidebar");


menu.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
})

cancel.addEventListener('click', function () {
    sidebar.classList.remove("show-sidebar");
})