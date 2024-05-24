$(function () {
  let deviceWidth = $(window).width();

  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3
      }
    }
  });
});


