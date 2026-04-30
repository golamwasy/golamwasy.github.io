document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       Theme Toggle (Dark / Light)
       ========================================= */
    const root = document.documentElement;
    const toggleDesktop = document.getElementById('theme-toggle');
    const toggleMobile = document.getElementById('theme-toggle-mobile');

    // Restore saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);

    function toggleTheme() {
        const current = root.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }

    if (toggleDesktop) toggleDesktop.addEventListener('click', toggleTheme);
    if (toggleMobile)  toggleMobile.addEventListener('click', toggleTheme);

    /* =========================================
       Reveal on Scroll (IntersectionObserver)
       ========================================= */
    const revealEls = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Respect inline animation-delay via setTimeout
                const delay = parseFloat(entry.target.style.animationDelay || '0') * 1000;
                setTimeout(() => entry.target.classList.add('visible'), delay);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    /* =========================================
       Smooth Scroll for Anchor Links
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = window.innerWidth <= 1024 ? 80 : 0;
                const pos = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });

                // Close mobile nav if open
                const overlay = document.querySelector('.mobile-nav-overlay');
                const toggle = document.getElementById('menu-toggle');
                if (overlay && overlay.classList.contains('open')) {
                    overlay.classList.remove('open');
                    toggle.classList.remove('open');
                }
            }
        });
    });

    /* =========================================
       Active Nav Link on Scroll
       ========================================= */
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    const activateLink = () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 200;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });
    };

    window.addEventListener('scroll', activateLink, { passive: true });
    activateLink();

    /* =========================================
       Mobile Menu Toggle
       ========================================= */
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        // Create mobile nav overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-nav-overlay';
        overlay.innerHTML = `
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="cv.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
        `;
        document.body.appendChild(overlay);

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            overlay.classList.toggle('open');
        });
    }

});
