// Smooth scrolling for anchor links
document.addEventListener('click', function (event) {
    if (event.target.matches('a[href^="#"]')) {
      event.preventDefault();
      var target = document.querySelector(event.target.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
  