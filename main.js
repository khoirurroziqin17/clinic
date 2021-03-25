// ========== Initialize Swiper =============
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        787: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

// ============ SCROLL REVEAL ANIMATION ==========
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800
});

sr.reveal(`.home-img, .home-features, .home-title, .btn-home,
         .solution-title, .solution-content,
         .doctor-title, .doctor-desc, .doctor-box, .btn-doctor,
         .testimonial,
         .footer-head, .footer-main`, {
    origin: 'top',
    internal: 200
})

sr.reveal(`.qualified-left,
.post-title, .post-item, 
.find-img, .find-box,
.gallery-left,
.contact-left`, {
    origin: 'left',
    internal: 200
})

sr.reveal(`.qualified-right, 
.post-img, .post-box,
.find-right,
.gallery-right,
.contact-right`, {
    origin: 'right',
    internal: 200
})