const accordion = document.querySelector('.team__list')
const item = accordion.querySelector('.employee');
const name = item.querySelector('.employee__name');
const employeeLink = name.querySelector('.employee__link');

employeeLink.addEventListener('click', function(e) {
  console.log(e)
  e.preventDefault();
})

item.addEventListener('click', function(e) {
  e.preventDefault();
  if (item.classList.contains('employee-active')) {
    item.classList.remove('employee-active');
  } else {
    item.classList.add('employee-active');
  }
})