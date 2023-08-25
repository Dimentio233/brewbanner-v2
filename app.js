const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    console.log("here goes navLinks DOM", navLinks);

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        console.log("here goes nav DOM", nav);
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
    
        burger.classList.toggle('toggle')
    
    })
}

navSlide();