// --- 1. كود فتح وقفل القائمة على الموبايل ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// لما ندوس على الزرار، بنضيف أو نشيل كلاس active
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// نقفل القائمة لما ندوس على أي لينك جواها
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- 2. كود تغيير لون الناف بار عند التمرير ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});