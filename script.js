window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { /* Khi cuộn quá 50px */
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});