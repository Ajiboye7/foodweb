document.querySelector(".menu").addEventListener('click', () => {
    document.querySelectorAll(".target").forEach((item) => {
        item.classList.toggle("change")
    })
});

const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;

setInterval(() => {
    i++

    const icon = document.querySelector('.section-1-icons .change');

    icon.classList.remove('change');

    if(i > icons.length){
        icons[0].classList.add('change');
        i = 1;
    } else {
        icon.nextElementSibling.classList.add('change');
    }

}, 1000);

/*var slide = [];
var i = 0;
 slide[0] = document.querySelector(".fas fa-egg");
 slide[1] = document.querySelector(".fas fa-stroopwafel");
 slide[2] = document.querySelector(".fas fa-chees");
 slide[3] = document.querySelector(".fas fa-hotdog");
 slide[4] = document.querySelector(".fas fa-drumstick-bite");
 slide[5] = document.querySelector(".fas fa-apple-alt");
 slide[6] = document.querySelector(".fas fa-ice-cream");
 slide[7] = document.querySelector(".fas fa-fish");
 slide[8] = document.querySelector(".fas fa-cookie");
 slide[9] = document.querySelector(".fas fa-seedling");

 function changeSlide(){
   slide[i] = document.querySelector(".section-1-icons")
    if(i < slide.length -1){
        i++;
     }
     else{
        i=0;
     }
     setTimeout("changeSlide()", 3000);
 }
 window.onload = changeSlide;*/

