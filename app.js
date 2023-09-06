const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        if (nav.classList.contains('nav-active')) {
            // Applying animations when menu is active
            navLinks.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            });
        } else {
            // Removing animations when menu is inactive
            navLinks.forEach((link) => {
                link.style.animation = '';
            });
        }

        burger.classList.toggle('toggle');
    });

    // New code to close hamburger menu when menu item is clicked
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');  // remove the nav-active class
            burger.classList.remove('toggle');  // revert burger to its original state

            // Removing animations when menu is closed through nav link click
            navLinks.forEach((link) => {
                link.style.animation = '';
            });
        });
    });
}

navSlide();
