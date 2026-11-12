const squares = document.querySelectorAll('.square');

const text = document.querySelectorAll('.h1');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.15 });

squares.forEach((sq, i) => {
    sq.style.transitionDelay = `${(i % 5) * 100}ms`;
    observer.observe(sq);
});

