const menuLink = document.querySelectorAll('.menu__link');

let arrayMenuLink = [...menuLink];
arrayMenuLink.map((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let wrap = item.closest('.menu__list').querySelector('.menu__content--active')
    if (wrap) {
      item.closest('.menu__item').classList.add('menu__content--active');
      wrap.classList.remove('menu__content--active')
    } else {
      item.closest('.menu__item').classList.add('menu__content--active');
    }
  })
});