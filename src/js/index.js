const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');
const navItems = document.querySelectorAll('nav ul li a');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});

navItems.forEach(item => {
  item.addEventListener('click', function() {
    nav.classList.remove('slide');
  });
});
