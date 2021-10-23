import { offers } from './data.js';

const TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

console.log(offers);

// console.log(collectionItem);
// console.log(necessaryElements);
//       // necessaryElements.some(
//       //   (necessaryElement) => {
//       //     collectionItem.classList.contains(`popup__feature--${necessaryElement}`);
//       //   });


const deleteUnnecessaryElements = (containerClass, necessaryElements) => {
  const functionMy = () => {
    const containers = document.querySelectorAll(containerClass);
    containers.forEach((container) => {
      const collectionItem = container.children;
      const isNecessary = necessaryElements.some(
        (necessaryElement) => collectionItem.classList.contains(`popup__feature--${necessaryElement}`),
      );
      if (!isNecessary) {
        collectionItem.remove();
      }
    });
  };
  return functionMy;
};

// emojiList.forEach((emojiListItem) => {
//   const isNecessary = userEmotions.some(
//     (userEmotion) => emojiListItem.classList.contains('emoji--' + userEmotion),
//   );
//   if (!isNecessary) {
//     emojiListItem.remove();
//   }
// });


const mapContainer = document.querySelector('#map-canvas');
const CARD_TEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCard = (array) => {
  array.forEach((offer) => {
    const card = CARD_TEMPLATE.cloneNode(true);
    card.querySelector('.popup__title').textContent = offer.offer.title;
    card.querySelector('.popup__text--address').textContent = offer.offer.address;
    card.querySelector('.popup__text--price').textContent = `${offer.offer.price}$`;
    card.querySelector('.popup__type').textContent = TYPE_TRANSLATE[offer.offer.type];
    card.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;// make funct "1 гостей"
    card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
    // deleteUnnecessaryElements('.popup__features', offer.offer.features);
    deleteUnnecessaryElements('.popup__features', offer.offer.features);
    card.querySelector('.popup__description').textContent = offer.offer.description;
    card.querySelector('.popup__photo').src = offer.offer.photos;
    card.querySelector('.popup__avatar').src = offer.author.avatar;


    // add to html
    mapContainer.append(card);
  });
};

createCard(offers);
