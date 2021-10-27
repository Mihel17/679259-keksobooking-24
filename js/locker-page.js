import { mapContainer, createCard } from './create-card.js';

const formAdd = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');


const lockForm = (boolean, ...forms) => {
  if (boolean) {
    mapContainer.innerHTML = '';

    // будут дубликаты, так как в ветке елсе отрисовуем карточки при каждой разблокировке страницы. Решение отрисовывать только 1-ин раз, во время загрузки страницы, в не зависимости от состояния (заблокирована либо нет). И показывать и скрывать карту с помощью display block

    // for (const item of mapContainer.children) {
    //   item.style.display = 'none';
    // }

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
};

lockForm(1, filter, formAdd);


