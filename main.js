var burgerMenu = document.getElementById('hamburger-menu-link');
var burgerMenuClose = document.getElementById('hamburger-menu-close');
var burgerMenuItems = document.getElementById('nav-items');

burgerMenu.addEventListener('click', function (e) {
  console.log(e)
  e.preventDefault();
  burgerMenu.classList.add('hamburger-menu-link-active')
  burgerMenuItems.classList.add('hamburger-menu-items-active')
});

burgerMenuClose.addEventListener('click', function (e) {
  console.log(e)
  e.preventDefault();
  burgerMenu.classList.remove('hamburger-menu-link-active')
  burgerMenuItems.classList.remove('hamburger-menu-items-active')
});