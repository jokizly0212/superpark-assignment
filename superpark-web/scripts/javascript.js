const menu_open = document.querySelector('.menu-icon.open');
const menu_close = document.querySelector('.menu-icon.close');
const menu_bar = document.querySelector('.menu-bar');
const menu_button = document.querySelector('.menu-button');
const menu_wrapper = document.querySelector('.menu-wrapper');
const indicators = document.querySelectorAll('.carousel-indicators li');
const carousel_slides = document.querySelectorAll('.carousel-item');

window.addEventListener('scroll', function () {
   if(window.pageYOffset > 300) {
        menu_button.classList.add('menu-scroll');
   } else {
        menu_button.classList.remove('menu-scroll');
   }
});

menu_open.addEventListener('click', () => {
    menu_close.setAttribute('style', 'opacity: 1 ; visibility: visible');
    menu_open.style.opacity = '0';
    menu_bar.classList.add('menu-open-animation');
});
menu_close.addEventListener('click', () => {
    menu_close.setAttribute('style', 'opacity: 0 ; visibility: hidden');
    menu_open.style.opacity = '1';
    menu_bar.classList.remove('menu-open-animation');
    menu_bar.classList.add('menu-close-animation');
    menu_bar.addEventListener('webkitAnimationEnd', () => {
        menu_bar.classList.remove('menu-close-animation');
    });
});
let slide_interval = setInterval(() => {
    let cur_slide_pos = 0;
    let cur_slide = document.querySelector('.carousel-item.active');
    for(cur_slide_pos = 0; cur_slide = cur_slide.previousElementSibling; cur_slide_pos++){}
    if(cur_slide_pos < carousel_slides.length-1) {
        for (let i = 0; i < carousel_slides.length; i++) {
            carousel_slides[i].classList.remove('active');
            indicators[i].classList.remove('active');
        }
        carousel_slides[cur_slide_pos].nextElementSibling.classList.add('active');
        indicators[cur_slide_pos].nextElementSibling.classList.add('active');
    } else {
        for (let i = 0; i < carousel_slides.length; i++) {
            carousel_slides[i].classList.remove('active');
            indicators[i].classList.remove('active');
        }
        carousel_slides[0].classList.add('active');
        indicators[0].classList.add('active');
    }
}, 6000);
for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', function() {
        clearInterval(slide_interval);
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove('active');            
        }
        this.classList.add('active');
        let active_indicator = this;
        var cur_indicator = 0;
        for (cur_indicator = 0; active_indicator = active_indicator.previousElementSibling; cur_indicator++) {}
        for (let i = 0; i < carousel_slides.length; i++) {
            carousel_slides[i].classList.remove('active');
            carousel_slides[cur_indicator].classList.add('active');
        }
    })
}
