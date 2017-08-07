$(document).ready(function () {
   $('.top-slider .slider').slick({
       slidesToShow: 4,
       slidesToScroll: 1,
       arrows: false,
       dots: false,
       infinite: true,
       autoplay: true,
       speed: 800
   });
    $('.main-slider .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        dotsClass: 'slider-dots',
        adaptiveHeight: false
    });
});