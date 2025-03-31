window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    let filterBox = document.querySelector(".filter-box");
    if (window.scrollY > 50) { /* Khi cuộn quá 50px */
        navbar.classList.add('scrolled');
        filterBox.classList.add("show");
    } else {
        navbar.classList.remove('scrolled');
        filterBox.classList.remove("show");
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});