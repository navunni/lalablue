const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
});

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
});
 
function submitForm() {
    const fname   = document.getElementById('fname').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
 
    if (!email) {
        alert('Please enter your email address.');
        return;
    }
    if (!message) {
        alert('Please enter a message.');
        return;
    }
 
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
 
   
    fetch('https://formspree.io/f/mreoqvzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: fname + ' ' + document.getElementById('lname').value,
            email: email,
            subject: document.getElementById('subject').value,
            message: message
        })
    }).then(res => {
        if (res.ok) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('form-success').style.display = 'block';
        }
    });
}
 
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.animationPlayState = 'running';
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
 
document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});
