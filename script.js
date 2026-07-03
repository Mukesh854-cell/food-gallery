const scrollDown = document.querySelector('.nav');

window.addEventListener('scroll', () => {

    if (scrollY >= 110) {
        scrollDown.classList.add('scrolled');

    } else {
        scrollDown.classList.remove('scrolled');
    }
});

const statsSection = document.querySelector('.count-chef');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            let count = 0;
            const interval = setInterval(() => {
                count += 20;
                firstNumber.textContent = count.toLocaleString();
                if (count >= number) {
                    clearInterval(interval);
                }
            }, 15);
            console.log('visible!')
        }
    })
})

observer.observe(statsSection);

const firstNumber = document.querySelector('.numbers p');
const target = firstNumber.textContent;

const cleaned = target.replace(',', '');
const number = Number(cleaned);

