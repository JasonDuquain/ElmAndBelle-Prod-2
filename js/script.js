


/******* FADE HERO SECT ON SCROLL *********/

let content = document.querySelector('.large-hero__main-heading');
let blur = document.querySelector('.large-hero__overlay'); // this element has the filter: blur(4px) applied
let wHeight = window.innerHeight;

window.addEventListener('resize', () => wHeight = window.innerHeight);

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        function( cb ){
            window.setTimeout(cb, 1000 / 60);
        };
})();

class Scroller {
    constructor() {
        this.latestKnownScrollY = 0;
        this.ticking = false; 
    }
    
    init() {
        window.addEventListener('scroll', this.onScroll.bind(this));
        let hdr = document.querySelector('.large-hero');
        let hdrStyles = window.getComputedStyle(hdr);
        let hdrBgImg = hdrStyles.getPropertyValue('background-image');
        blur.style.backgroundImage = hdrBgImg;
    }

    onScroll() {
        this.latestKnownScrollY = window.scrollY;
        this.requestTick();
    }

    requestTick() {
        if ( !this.ticking ) {
            window.requestAnimFrame(this.update.bind(this));
        }
        this.ticking = true;
    }

    update() {
        let currentScrollY = this.latestKnownScrollY;
        this.ticking = false;
      
        let slowScroll = currentScrollY / 2;
        let blurScroll = currentScrollY * 2;
        let opaScroll = 1.4 - currentScrollY / 400;
        
        /* needed to adjust the translate since the initial heading is xlated in css  */
        content.style.transform = `translate(-50%, ${slowScroll}px)`;
        content.style.opacity = opaScroll;
      
        blur.style.opacity = blurScroll / wHeight; 
    }
    
}

var scroller = new Scroller();  
scroller.init();


/***********  SERVICES ANIMATE IN ON SCROLL  ***********/

const servicesSects = document.querySelectorAll('.services_wrap');
const servicesGrid = document.querySelector('.services__grid')

document.addEventListener('scroll', (e) => {
    
    if (servicesGrid.getBoundingClientRect().top < (window.innerHeight / 2)) {
        servicesGrid.classList.add('animate-in')
    } 
    
});


/***********  TESTIMONIAL SLIDER  ***********/

$(document).ready(function(){
  $('.testimonials__flex').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true/*,
  autoplay: true,
  autoplaySpeed: 5000*/
  });
});


/**** REMOVE HERO TEXT ANIMATION AFTER ONE TIME*****/
let tests = document.querySelectorAll('[class*=quote]');

tests.forEach((el) => {
    el.addEventListener('animationend', function(e) {
        window.sessionStorage.setItem('quote', 'complete');
    });
});

tests.forEach((el) => {
    if (window.sessionStorage.getItem('quote')) {
        el.style.animation = 'none';
        el.style.opacity = '1';
    }
});

/********   BACK TO TOP BTN  *********/
let docElement = document.documentElement;
let docBody = document.body;
let bttBtn = document.querySelector('.js-btt-btn');

let heights = [docElement.scrollHeight, docBody.scrollHeight, docElement.offsetHeight, docBody.offsetHeight];
let highestHeight = Math.max(...heights);

document.addEventListener('scroll', (e) => {
    (docElement.scrollTop > (highestHeight / 8)) ? bttBtn.classList.add('active') : bttBtn.classList.remove('active');

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


/****************  STICKY HEADER   ****************/
let header = document.querySelector('.site-header');
let nav = document.querySelector('.navigation');
let hero = document.querySelector('.large-hero');

document.addEventListener('scroll', (e) => {
    if (hero.getBoundingClientRect().bottom <= 0) {
        document.body.style.paddingTop = nav.getBoundingClientRect().height + 'px';
        nav.classList.add('fixed');
    } else {
        document.body.style.paddingTop = 0;
        nav.classList.remove('fixed');
    }
});


/*********** HAMBURGER MENU  ***********/

let hamburgerMenu = document.querySelector('.hamburger-icon');

hamburgerMenu.addEventListener('click', function(e) {
    this.classList.toggle('interact');
    nav.classList.toggle('hamburger-on');
});



/****************  HIGHTLIGHT NAV ITEMS ON SCROLL   ****************/
let navs = document.querySelectorAll('.navigation__link:not(.navigation__link-home)');
let sects = document.querySelectorAll('section:not(:first-of-type):not(:last-of-type)');


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

var a = 0;
$(window).scroll(function() {

  var oTop = $('.stats').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.stats__number').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});



/********  COPYRIGHT DATE *******/
let year = document.querySelector('.year');
year.textContent = new Date().getFullYear();


/******** ONLY LOAD MAYA QUOTE ON COMPLETE PAGE LOAD - FIX THIS TO WORK ON HERO BG IMG LOAD  *******/
window.addEventListener('load', function(e) {
    hero.classList.add('loaded')
})

