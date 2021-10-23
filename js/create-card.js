import { offers } from './data.js';

// const TYPE_TRANSLATE_OBJECT = {
//   flat: 'Квартира',
//   bungalow: 'Бунгало',
//   house: 'Дом',
//   palace: 'Дворец',
//   hotel: 'Отель',
// };

// TYPE_TRANSLATE_OBJECT.keys(TYPE_TRANSLATE_ARRAY);
// console.log(TYPE_TRANSLATE_ARRAY);

// const traslateType = (type) => {
//   TYPE_TRANSLATE.forEach((typeItem) => {
//     if (type === typeItem) {
//       type.offer.type = typeItem;
//       console.log(type.offer.type);
//     }
//   });
// };

const mapContainer = document.querySelector('#map-canvas');
const CARD_TEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCard = offers.forEach((offer) => {
  const card = CARD_TEMPLATE.cloneNode(true);
  card.querySelector('.popup__title').textContent = offer.offer.title;
  card.querySelector('.popup__text--address').textContent = offer.offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.offer.price}$`;
  // card.querySelector('.popup__type').textContent = traslateType(offer.offer.type);
  // add to html
  mapContainer.append(card);
});

createCard();
