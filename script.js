function hideLoader() {
    $('#loading').hide();
}
$(window).ready(hideLoader);
setTimeout(hideLoader, 20 * 1000);
let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active');
            });
        };
    });
 

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

crollReveal().reveal('.home-content, .heading',  { origin: 'top' });
crollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'buttom' });
crollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
crollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['web development', 'web development' , 'web development'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});