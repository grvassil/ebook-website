// Add custom JavaScript here
function navbarDark() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('darkNavbar');
    } else {
      navbar.classList.remove('darkNavbar');
    }
  });
}

document.addEventListener('DOMContentLoaded', navbarDark);
