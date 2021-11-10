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
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === ' ' || evt.key === 'Enter') {
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
    if (evt.key === 'Escape') {
      modal.remove();
    }
  }, { once: true });
  window.addEventListener('click', () => {
    modal.remove();
  }, { once: true });
};


export { showSuccessModal, showErrorModal };
