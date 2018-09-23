/**** REMOVE HERO TEXT ANIMATION AFTER ONE TIME*****/

let tests = document.querySelectorAll('[class^=test]');

tests.forEach((el) => {
    el.addEventListener('animationend', function(e) {
        window.sessionStorage.setItem('test', 'testValue');
    });
});


tests.forEach((el) => {
    if (window.sessionStorage.getItem('test')) {
        el.style.animation = 'none';
        el.style.opacity = '1';
    }
});



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


/********   TESTIMONIAL SLIDER   *******/
let testimonialFlex = document.querySelector('.testimonials__flex');
let customers = document.querySelectorAll('.customer');
let prev = document.querySelector('.testimonials__prev');
let next = document.querySelector('.testimonials__next');
let dotContainer = document.querySelector('.testimonials__dot-container');
let dotArr = [];
let customerWidth = customers[0].scrollWidth;
let index = 0;


for (let i = 0; i < customers.length; i++) {
    let dot = document.createElement('span');
    dot.classList.add('testimonials__dot');
    dotContainer.append(dot);
    dotArr.push(dot);
}

dotArr[0].classList.add('grey');
dotArr[1].classList.add('active');
dotArr[2].classList.add('grey');

dotArr.forEach((el, idx) => {
    let customerWidth = customers[0].scrollWidth;
    let customerMarginRight = parseInt(getComputedStyle(customers[0]).marginRight);
    let totalWidth = customerWidth + (customerMarginRight * 2);
    el.addEventListener('click', (e) => {
        testimonialFlex.style.transform = `translateX(${(-totalWidth * (idx - 1))}px)`;
        resetDotActive(e);
    })
});
  
function resetDotActive(e) {
    for (let i = 0; i < dotArr.length; i++) {
        dotArr[i].classList.remove('active');
        dotArr[i].classList.remove('grey');
        e.target.classList.add('active');
        if (e.target.previousElementSibling) {
            e.target.previousElementSibling.classList.add('grey');
        }
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.classList.add('grey');
        }
    }
}

prev.addEventListener('click', (e) => {
    console.log(`1st line of prev, index is ${index} and transform is ${testimonialFlex.style.transform}`);
    let customerWidth = customers[0].scrollWidth;
    let customerMarginRight = parseInt(getComputedStyle(customers[0]).marginRight);
    let totalWidth = customerWidth + (customerMarginRight * 2);
    index--;
    if (index == -customers.length) {
        index = 0;
        testimonialFlex.style.transform = `translateX(${customerWidth * index}px)`;
    } else {
        testimonialFlex.style.transform = `translateX(${(totalWidth * index)}px)`;   
    }
    console.log(`last line of prev, index is ${index} and transform is ${testimonialFlex.style.transform}`);
});

next.addEventListener('click', (e) => {
    console.log(`1st line of next, index is ${index} and transform is ${testimonialFlex.style.transform}`);
    let customerWidth = customers[0].scrollWidth;
    let customerMarginRight = parseInt(getComputedStyle(customers[0]).marginRight);
    let totalWidth = customerWidth + (customerMarginRight * 2);
    index++;
    if (index >= customers.length) {
        index = 0;
        testimonialFlex.style.transform = `translateX(${-customerWidth * index}px)`;
    } else {
        
        //let transform = testimonialFlex.style.transform;
        //const translateX = transform.replace(/[^\d.]/g, ''); //it is a string
              
        testimonialFlex.style.transform = `translateX(${-(totalWidth * index)}px)`;
        
        
    }
    console.log(`last line of next, index is ${index} and transform is ${testimonialFlex.style.transform}`);
});


/*
let svcButtons = document.querySelectorAll('.services .btn-standard');

svcButtons.forEach((el) => {
   el.addEventListener('click', function(e) {
       document.body.classList.add('blur');
   }) 
});

*/











