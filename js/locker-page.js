import { mapContainer } from './create-card.js';
import { formAdd, filter, deleteFormListener } from './form.js';

const lockForm = (boolean, ...forms) => {
  if (boolean) {
    deleteFormListener();
    // mapContainer.innerHTML = '';

    for (const item of mapContainer.children) {
      item.style.display = 'none';
    }

    for (const form of forms) {
      form.classList.add(`${form.classList[0]}--disabled`);
      const formElements = form.children;
      for (const item of formElements) {
        item.disabled = true;
      }
    }
  } else {
    // createCard();

    for (const item of mapContainer.children) {
      item.style.display = 'block';
    }

    for (const form of forms) {
      form.classList.remove(`${form.classList[0]}--disabled`);
      const formElements = form.children;
      for (const item of formElements) {
        item.disabled = false;
      }
    }
  }
};

lockForm(1, filter, formAdd);


