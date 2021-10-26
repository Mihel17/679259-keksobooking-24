import { MAP_CONTAINER, createCard } from './create-card.js';

const FORM_ADD = document.querySelector('.ad-form');
const FILTER = document.querySelector('.map__filters');


function lockForm(boolean, ...forms) {
  if (boolean) {
    MAP_CONTAINER.innerHTML = '';
    for (const form of forms) {
      form.classList.add(`${form.classList[0]}--disabled`);
      const formElements = form.children;
      for (const item of formElements) {
        item.disabled = true;
      }
    }
  } else {
    createCard();
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


