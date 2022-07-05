
$(document).ready(function(){
/*start header*/

var menu = document.querySelector('.menu'),
    menuOverlay = document.querySelector('.menu .overlay'),
    sideBar = document.querySelector('.side-bar'),
    menuTimes = document.querySelector('.times'),
    bars = document.querySelector('.bars');


function openMenu () {

    menu.style.display = 'block';
    setTimeout(function(){
        sideBar.style.right = '0';
    }, 10);
}

function closeMenu () {
    menu.style.display = 'none';
    sideBar.style.right = '-205px';
}

bars.onclick = function () {

    openMenu ();
}
menuTimes.onclick = function () {

    closeMenu ();
}
menuOverlay.onclick = function () {

    closeMenu ();
}
window.onresize = function () {

    if (this.innerWidth >= 767) {
        closeMenu ();
    }
}

/* start slider */

$(document).ready(function(){
    $('.new-product').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl:true,
        autoplaySpeed: 2000,
        dots:true,
        adaptiveHeight: true,
    });
  });


  /* start new arrived */

    $('.new-arrived').slick({
        infinite: false,
        autoplay: false,
        dots:true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        rtl:true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          
        ]
        
    });
    
// end prodact-slider

//start opinions

$('.opinions').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl:true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 772,
                settings: {
                  autoplay: true,
                }
            }
        ]
    });

//End opinions

//start articals


$('.articals-container').slick({
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    rtl:true,
    responsive : [
      {
        breakpoint:992 ,
        settings : {
          slidesToShow: 1,
          autoplay:true,
          dots:false
        }
      }
    ]
});




//End articals

//start features

$('.my-features').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    rtl:true,
    autoplaySpeed: 4000,
    dots:false,
    responsive:[
        {
            breakpoint:992, 
            settings:{
                slidesToShow:2,
                autoplay: true
            }
        },
        {
            breakpoint:767, 
            settings:{
                slidesToShow:1
            }
        }
    ]
})

//End features
window.addEventListener('load', AOS.refresh);
AOS.init();
});