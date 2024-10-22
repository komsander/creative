var swiper = new Swiper(".hero__swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  
});

document.addEventListener("DOMContentLoaded", function () {
  var works = document.querySelectorAll(".works__img");
  var instances = M.Materialbox.init(works);
});

$(function () {
  $(".reviews__slider-for").slick({
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    fade: true,
    
    asNavFor: ".reviews__slider-nav",
  });
  $(".reviews__slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".reviews__slider-for",
    dots: false,
    variableWidth:true,
    centerMode: true,
   
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',

    responsive: [
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide:true,
          
        }
      },
      
    ]
  });
});

$(".menu__btn").on("click", function () {
  $(".menu-mobile").toggleClass("menu-mobile--active");
  $(".menu__btn").toggleClass("menu__btn--active");
});
