import { offers } from './data.js';

const TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const deleteUnnecessaryElements = (containerClass, necessaryElements) => {
  const collectionItems = containerClass.querySelectorAll('.popup__feature');
  collectionItems.forEach((collectionItem) => {
    const isNecessary = necessaryElements.some(
      (necessaryElement) => collectionItem.classList.contains(`popup__feature--${necessaryElement}`),
    );
    if (!isNecessary) {
      collectionItem.remove();
    }
  });
};

const MAP_CONTAINER = document.querySelector('#map-canvas');
const CARD_TEMPLATE = document.querySelector('#card')
  .content
  .querySelector('.popup');

const createCard = () => {
  offers.forEach((offer) => {
    const card = CARD_TEMPLATE.cloneNode(true);
    card.querySelector('.popup__title').textContent = offer.offer.title;
    card.querySelector('.popup__text--address').textContent = offer.offer.address;
    card.querySelector('.popup__text--price').textContent = `${offer.offer.price}$`;
    card.querySelector('.popup__type').textContent = TYPE_TRANSLATE[offer.offer.type];
    card.querySelector('.popup__text--capacity').textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests} гостей`;// make funct "1 гостей"
    card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
    deleteUnnecessaryElements(card.querySelector('.popup__features'), offer.offer.features);
    card.querySelector('.popup__description').textContent = offer.offer.description;
    card.querySelector('.popup__photo').src = offer.offer.photos;
    card.querySelector('.popup__avatar').src = offer.author.avatar;

    // add to html
    MAP_CONTAINER.append(card);
  });
};

// document.querySelector('.map__canvas').setAttribute('style', 'display:grid; grid-template-columns: repeat(4, 1fr);');
// как можно через точечную нотацию задать несколько css свойств


export { MAP_CONTAINER, createCard };
