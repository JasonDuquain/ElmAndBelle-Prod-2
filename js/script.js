
/****** BACK TO TOP BTN*******/
let docElement = document.documentElement;
let docBody = document.body;
let bttBtn = document.querySelector('.js-btt-btn');

let heights = [docElement.scrollHeight, docBody.scrollHeight, docElement.offsetHeight, docBody.offsetHeight];
let highestHeight = Math.max(...heights);

document.addEventListener('scroll', (e) => {
    (docElement.scrollTop > (highestHeight / 3)) ? bttBtn.classList.add('active') : bttBtn.classList.remove('active');

});

bttBtn.addEventListener('click', (e) => {
    e.preventDefault();
    docElement.scrollTop = 0;
});


/***  SUBSCRIBE INPUTS CHANGE ICON COLOR ON FOCUS  ****/
let inputs = document.querySelectorAll('form input');

inputs.forEach((el) => el.addEventListener('focus', changeFocus));
inputs.forEach((el) => el.addEventListener('blur', changeBlur));

function changeFocus(e) {
    let prevSib = e.target.previousElementSibling;
    prevSib.classList.add('input-color');
}

function changeBlur(e) {
    let prevSib = e.target.previousElementSibling;
    prevSib.classList.remove('input-color');
}


/********  COPYRIGHT DATE *******/
let year = document.querySelector('.year');
year.textContent = new Date().getFullYear();
console.log(year);




