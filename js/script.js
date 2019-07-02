/***********  SLIDER  ***********/

$(document).ready(function(){
  $('.testimonials__flex').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true
  });
});


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


/******   BACK TO TOP BTN    *******/
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


/*****  SUBSCRIBE INPUTS CHANGE ICON COLOR ON FOCUS  ******/
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


/***********  TESTIMONIAL SLIDER   *********/
let testimonialFlex = document.querySelector('.testimonials__flex');
let customers = Array.from(document.querySelectorAll('.customer'));
let prev = document.querySelector('.testimonials__prev');
let next = document.querySelector('.testimonials__next');
let dotContainer = document.querySelector('.testimonials__dot-container');




/****************  STICKY HEADER   ****************/
let header = document.querySelector('.site-header');
let nav = document.querySelector('.navigation');
let hero = document.querySelector('.large-hero');

document.addEventListener('scroll', (e) => {
    if (hero.getBoundingClientRect().top <= 0) {
        document.body.style.paddingTop = nav.getBoundingClientRect().height + 'px';
        nav.classList.add('fixed');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed');
    }
})


/****************  HIGHTLIGHT NAV ITEMS ON SCROLL   ****************/
let navs = document.querySelectorAll('.navigation__link:not(.navigation__link-home)');
let sects = document.querySelectorAll('section:not(:first-of-type):not(:last-of-type)');

console.log(sects);

document.addEventListener('scroll', (e) => {
    
    navs.forEach((el, idx) => {
        let sect = sects[idx].getBoundingClientRect();
        if (sect.top <= 5 && sect.bottom >= 5) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
})

/******  STATS numbers increasing fast  *******/
let statOne = document.querySelector('.stats__number--one');
let numOne = 1; 
let clearOne = setInterval(() => { 
    numOne++;
    statOne.textContent = numOne;
    if (numOne === 35) {
        clearInterval(clearOne);
    } 
}, 40);
    
let statTwo = document.querySelector('.stats__number--two');
let numTwo = 1; 
let clearTwo = setInterval(() => { 
    numTwo++;
    statTwo.textContent = numTwo;
    if (numTwo === 12) {
        clearInterval(clearTwo);
    } 
}, 120);
    
let statThree = document.querySelector('.stats__number--three');
let numThree = 1; 
let clearThree = setInterval(() => { 
    numThree++;
    statThree.textContent = numThree;
    if (numThree === 100) {
        clearInterval(clearThree);
    } 
}, 15);

let statFour = document.querySelector('.stats__number--four');
let numFour = 1; 
let clearFour = setInterval(() => { 
    numFour++;
    statFour.textContent = numFour;
    if (numFour === 140) {
        clearInterval(clearFour);
    } 
}, 10);

/*
let svcButtons = document.querySelectorAll('.services .btn-standard');

svcButtons.forEach((el) => {
   el.addEventListener('click', function(e) {
       document.body.classList.add('blur');
   }) 
});

*/











