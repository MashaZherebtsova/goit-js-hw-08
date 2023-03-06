import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Заповніть поля.`);
  }

  localStorage.removeItem(FEEDBACK_FORM_STATE);
  event.currentTarget.reset();
  dataForm = {};
}