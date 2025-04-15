// script.js

// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation on scroll (for fade-in effect)
const fadeInElements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
  fadeInElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
    }
  });
};

window.addEventListener('scroll', checkVisibility);

// Initial check for elements in view on page load
checkVisibility();
