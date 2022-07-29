/* eslint-disable linebreak-style */

$(document).ready(function(){
    $(".p-design__slideshow").slick({
        slideToSlide: 1,
        dots: false,
        infinite: true,
        cssEase: "linear",
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev'></button>",
        nextArrow:"<button type='button' class='slick-next'></button>",
    });
});