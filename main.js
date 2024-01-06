const mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
const navbar = document.querySelector("nav")

mobileNavbarBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});



