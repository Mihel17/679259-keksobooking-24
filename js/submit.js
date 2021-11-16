import { makeRequest } from './request.js';
import { map } from './map.js';
import { formAdd, resetAddForm } from './form.js';
import { reset } from './reset.js';
const ESCAPE = 'Escape';
const body = document.querySelector('body');
const modalSuccess = body.querySelector('#success')
  .content
  .querySelector('.success');

const modalError = body.querySelector('#error')
  .content
  .querySelector('.error');


const showSuccessModal = () => {
  const modal = modalSuccess.cloneNode(true);
  body.append(modal);
  formAdd.reset();
  resetAddForm();
  window.addEventListener('keydown', (evt) => {
    if (evt.key === ESCAPE) {
      modal.remove();
    }
  }, { once: true });
  window.addEventListener('click', () => {
    modal.remove();
  }, { once: true });
};


const showErrorModal = () => {
  const modal = modalError.cloneNode(true);
  const closeModal = modal.querySelector('.error__button');
  body.append(modal);
  closeModal.addEventListener('click', () => {
    modal.remove();
  }, { once: true });
  window.addEventListener('keydown', (evt) => {
    if (evt.key === ESCAPE) {
      modal.remove();
    }
  }, { once: true });
  window.addEventListener('click', () => {
    modal.remove();
  }, { once: true });
};


const submitOnSuccess = () => {
  showSuccessModal();
  map.closePopup();
  reset();
};


const submitOnErrror = () => {
  showErrorModal();
};


const onFormAddSubmit = (evt) => {
  evt.preventDefault();
  makeRequest(
    submitOnSuccess,
    submitOnErrror,
    'POST',
    new FormData(evt.target),
  );
};
formAdd.addEventListener('submit', onFormAddSubmit);

