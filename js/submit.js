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
  let removeEventListener = '';

  const onWindowKeydown = (evt) => {
    if (evt.key === ESCAPE) {
      modal.remove();
      removeEventListener();
    }
  };
  window.addEventListener('keydown', onWindowKeydown, { once: true });

  const onWindowClick = () => {
    modal.remove();
    removeEventListener();
  };
  window.addEventListener('click', onWindowClick, { once: true });

  removeEventListener = () => {
    window.removeEventListener('click', onWindowClick);
    window.removeEventListener('keydown', onWindowKeydown);
  };
};


const showErrorModal = () => {
  const modal = modalError.cloneNode(true);
  const closeModal = modal.querySelector('.error__button');
  body.append(modal);
  let removeEventListener = '';

  const onCloseModalClick = () => {
    closeModal.remove();
    removeEventListener();
  };
  closeModal.addEventListener('click', onCloseModalClick, { once: true });

  const onWindowKeydown = (evt) => {
    if (evt.key === ESCAPE) {
      modal.remove();
      removeEventListener();
    }
  };
  window.addEventListener('keydown', onWindowKeydown, { once: true });

  const onWindowClick = () => {
    modal.remove();
    removeEventListener();
  };
  window.addEventListener('click', onWindowClick, { once: true });

  removeEventListener = () => {
    window.removeEventListener('click', onWindowClick);
    window.removeEventListener('keydown', onWindowKeydown);
    closeModal.removeEventListener('click', onCloseModalClick);
  };
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

