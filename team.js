const employeeLink = document.querySelectorAll('.employee__link');
let arrayEmployeeLink = [...employeeLink];
arrayEmployeeLink.map((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let wrap = item.closest('.team__list').querySelector('.employee-active')
    if (wrap) {
      item.closest('.employee').classList.add('employee-active');
      wrap.classList.remove('employee-active')
    } else {
      item.closest('.employee').classList.add('employee-active');
    }
  })
});