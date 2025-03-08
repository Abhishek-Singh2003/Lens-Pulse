document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.fade-in').forEach(el => {
                    el.style.animationPlayState = 'running';
                });
            }
        });
    }, { threshold: 0.2 });

    pages.forEach(page => observer.observe(page));
});