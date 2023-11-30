const slider = new Swiper(".swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        800: {
         
          slidesPerView: 2,
          spaceBetween: 40
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
});
