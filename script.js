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
            observer.unobserve(entry.target);

            const numbers = document.querySelectorAll('.numbers p');

            numbers.forEach((el) => {
                const target = el.textContent;
                const cleaned = target.replace(',', '').replace('%', '');
                const isPercentage = target.includes('%');
                const number = Number(cleaned);

                const totalTicks = 50;
                const step = number / totalTicks;
                let count = 0;

                const interval = setInterval(() => {
                    count += step;
                    if (isPercentage) {
                        el.textContent = count.toLocaleString() + '%';
                    } else {
                        el.textContent = count.toLocaleString();
                    }
                    if (count >= number) {
                        clearInterval(interval)
                    }
                }, 20);
            })
        }
    })
})

observer.observe(statsSection);