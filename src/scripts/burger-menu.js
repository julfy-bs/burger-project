var burgerMenu = document.getElementById('hamburger-menu-link');
var burgerMenuClose = document.getElementById('hamburger-menu-close');
var burgerMenuItems = document.getElementById('nav-items');
let overlayBurgerMenu = document.getElementById('hamburger-menu')

burgerMenu.addEventListener('click', function (e) {
  console.log(e)
  e.preventDefault();
  e.stopPropagation();
  burgerMenu.classList.add('hamburger-menu-link-active')
  burgerMenuItems.classList.add('hamburger-menu-items-active')
  overlayBurgerMenu.style.display = "block";
  document.body.style.overflow = 'hidden'
});

burgerMenuClose.addEventListener('click', function (e) {
  console.log(e)
  e.preventDefault();
  e.stopPropagation();
  burgerMenu.classList.remove('hamburger-menu-link-active')
  burgerMenuItems.classList.remove('hamburger-menu-items-active')
  overlayBurgerMenu.style.display = "none";
  document.body.style.overflow = 'auto'
});
