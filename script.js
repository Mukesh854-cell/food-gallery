const scrollDown = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    
    if (scrollY >= 110) {
         scrollDown.classList.add('scrolled');
         
    } else {
        scrollDown.classList.remove('scrolled');
    }
});