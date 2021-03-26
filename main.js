/*==================== SHOW MENU ====================*/
const showMenu = (menuId, toggleId) => {
    const menu = document.getElementById(menuId),
        toggle = document.getElementById(toggleId)

    if (menu && toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu')
        })
    }
}
showMenu('menu', 'nav-toggle')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.menu-link')

function linkAction() {
    const navMenu = document.getElementById('menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 85;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href="#' + sectionId + '"]').classList.add('active-link')
        } else {
            document.querySelector('.menu a[href="#' + sectionId + '"]').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

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