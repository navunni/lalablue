const header = document.getElementById('site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.style.animationPlayState='running'; observer.unobserve(e.target); }});
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => { el.style.animationPlayState='paused'; observer.observe(el); });