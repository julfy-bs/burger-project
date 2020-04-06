const left = document.querySelector(".scroll-btn-left");
const right = document.querySelector(".scroll-btn-right");
const items = document.querySelector(".slider");
const sliderItem = document.querySelector(".slider__item");


right.addEventListener("click", function (e) {
  loop("right", e);
});

left.addEventListener("click", function (e) {
  loop("left", e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    items.appendChild(items.firstElementChild);

  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}