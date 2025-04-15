// Scroll Reveal Animation
window.addEventListener("scroll", function () {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("active");
    }
  }
});
