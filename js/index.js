$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider_dots',
    dotsClass:'dots'
});

let hamberger = document.querySelector(".hamberger")
let times = document.querySelector('.times')
let hamNav= document.querySelector('.ham_nav')


hamberger.addEventListener('click', function(){
    hamNav.classList.add('open')
});

times.addEventListener('click', function(){
    hamNav.classList.remove('open')
});

window.onscroll = () => {
    hamNav.classList.remove("open");

}
     
 


});