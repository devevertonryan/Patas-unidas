var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    slidesPerView: 1,
    spaceBetween: 40,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 1,
            spaceBetween: 60
        }
    }
});