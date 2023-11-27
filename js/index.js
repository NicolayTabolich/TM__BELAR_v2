$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__nav,.header__line,.header').toggleClass('active_burger');
      $('body').toggleClass('lock');
   });
});

var swiper = new Swiper(".mySwiper", {
   spaceBetween: 200,
   centeredSlides: true,
   autoplay: {
      delay: 4500,
      disableOnInteraction: false,
   },

});