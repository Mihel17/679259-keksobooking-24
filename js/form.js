import { MAP_CONTAINER } from './create-card.js';

const FORM_ADD = document.querySelector('.ad-form');
const FILTER = document.querySelector('.map__filters');


function lockForm(boolean, ...forms) {
  if (boolean) {
    for (const item of MAP_CONTAINER.children) {
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
    for (const item of MAP_CONTAINER.children) {
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
}

lockForm(1, FILTER, FORM_ADD);


