// Header Scroll Script
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20));

// Hamburger Menu Script
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Logo Video - play only on hover. 

const logoVideo = document.querySelector('.logo-spin-video');
if (logoVideo) {
    document.querySelector('.logo').addEventListener('mouseenter', () => logoVideo.play());
    document.querySelector('.logo').addEventListener('mouseleave', () => {
        logoVideo.pause(); logoVideo.currentTime = 0;
    });
}

// Accordion Script
function toggleDetail(row) {
    const body = row.nextElementSibling;
    const toggle = row.querySelector('.detail-toggle');
    
    const wasOpen = body.classList.contains('open');
    document.querySelectorAll('.detail-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.detail-toggle').forEach(t => t.textContent = '+');
    if (!wasOpen) { body.classList.add('open'); toggle.textContent = '−'; }
}
 
// Scroll-triggered fade
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; observer.unobserve(e.target); }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    if (!el.closest('.hero')) { el.style.animationPlayState = 'paused'; observer.observe(el); }
});
