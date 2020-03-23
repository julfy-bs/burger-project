var burgerMenuLink = document.querySelector('.hamburger-menu-link');
var burgerMenu = document.querySelector('#hamburger-menu');
var computed = getComputedStyle(burgerMenu)

burgerMenuLink.addEventListener('keydown', function (e) {
  e.preventDefault();
  let burgerMenuDisplayed = (computed.burgerMenu);
  if (!burgerMenuDisplayed) {
    burgerMenuDisplayed = 0
  }
});

