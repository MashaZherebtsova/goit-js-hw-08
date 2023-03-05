import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};


const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailInputEl: document.querySelector('.feedback-form input'),
  textareaInputEl: document.querySelector('.feedback-form textarea'),
};

refs.formEl.addEventListener('submit', onFormSubmit);
refs.formEl.addEventListener('input', throttle(onSavingFormInput, 500));

onFormRecovery();

function onFormSubmit(e) {
  e.preventDefault();
  const emailValue = refs.emailInputEl.value;
  const textareaValue = refs.textareaInputEl.value;
  if (emailValue === '' || textareaValue === '') {
    alert('Заповніть поля');
  }
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onSavingFormInput(e) {
  formData[e.target.name] = e.target.value;

  const inputValueString = JSON.stringify(formData);

  localStorage.setItem(STORAGE_KEY, inputValueString);
}

function onFormRecovery() {
  const savedValue = localStorage.getItem(STORAGE_KEY);

  if (savedValue) {
    const recoveryValue = JSON.parse(savedValue);
    refs.emailInputEl.value = recoveryValue.email;
    refs.textareaInputEl.value = recoveryValue.message;
  }
}