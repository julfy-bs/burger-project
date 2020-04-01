const myForm = document.querySelector('#order-form');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function (event) {
  event.preventDefault();

  if (validateForm(myForm)) {

    const formData = new FormData();
    formData.append('name', myForm.elements.name.value);
    formData.append('phone', myForm.elements.phone.value);
    formData.append('email', myForm.elements.email.value);
    formData.append('comment', myForm.elements.comment.value);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      // Оверлей
      console.log(xhr.response);
      console.log(formData);
      const template = document.querySelector("#overlayTemplate").innerHTML;
      const overlay = createOverlay(template);

      sendButton.addEventListener("click", function () {
        if (xhr.response !== 200) {
          overlay.open();
          overlay.setContent("Спасибо за заказ, Ваш заказ получен! Наш оператор свяжется с Вами в ближайшее время!");
        } else {
          overlay.open();
          overlay.setContent(xhr.response.message);
        }

      });

      function createOverlay(template) {  
        const fragment = document.createElement('div');

        fragment.innerHTML = template;

        const overlayElement = fragment.querySelector(".overlay");
        const contentElement = fragment.querySelector(".overlay__content");
        const closeElement = fragment.querySelector(".overlay__close");

        overlayElement.addEventListener("click", e => {
          if (e.target === overlayElement) {
            closeElement.click();
          }
        });
        closeElement.addEventListener("click", () => {
          document.body.removeChild(overlayElement);
          overlayElement.style.display = "none";
          document.body.style.overflow = 'auto'
        });

        return {
          open() {
            document.body.appendChild(overlayElement);
            overlayElement.style.display = "block";
            document.body.style.overflow = 'hidden'
          },
          close() {
            closeElement.click();
          },
          setContent(content) {
            contentElement.innerHTML = content;
          }
        };
      }

    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.email)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }


  return valid;
}

function validateField(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;

    return false;
  } else {
    field.nextElementSibling.textContent = '';

    return true;
  }
}