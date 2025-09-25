// let btns = document.querySelectorAll('.question-btns');

// btns.forEach((btn) => {
//     btn.addEventListener('click', function (e) {
//         const parentElement = e.currentTarget.parentElement.parentElement;
//         parentElement.classList.toggle("show-text")
//     })
// })


const questions = document.querySelectorAll(".question-box");

questions.forEach(question => {
    // console.log(question);
    let btn = question.querySelector(".question-btns");
    btn.addEventListener('click', function () {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text")
    })
});