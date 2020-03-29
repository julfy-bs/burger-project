const accordionH = document.querySelector('.menu__list');
const itemH = accordionH.querySelector('.menu__item');
const menuLink = itemH.querySelector('.menu__link');
const nameH = itemH.querySelector('.menu__content');


menuLink.addEventListener('click', function(e) {
  console.log(e)
  e.preventDefault();
})

itemH.addEventListener('click', function(e) {
  e.preventDefault();
  if (nameH.classList.contains('menu__content--active')) {
    nameH.classList.remove('menu__content--active');
  } else {
    nameH.classList.add('menu__content--active');
  }
})