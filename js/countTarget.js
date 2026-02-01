
const duration = 5000;
const counters = document.querySelectorAll('.percent');
const section = document.querySelector('.arizona-flare');

counters.forEach(counter => {
    const target = +counter.dataset.target;
    const startTime = performance.now();

    function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);

        counter.textContent = value + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.textContent = target + '%';
        }
    }

    requestAnimationFrame(update);
});

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        startCount();
        observer.disconnect();
    }
});

observer.observe(section);

