const TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const mapContainer = document.querySelector('#map');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


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


const createCard = (offer) => {
  const card = cardTemplate.cloneNode(true);

  const title = card.querySelector('.popup__title');
  if (offer.offer.title) {
    title.textContent = offer.offer.title;
  } else {
    title.remove();
  }

  const address = card.querySelector('.popup__text--address');
  if (offer.offer.address) {
    address.textContent = offer.offer.address;
  } else {
    address.remove();
  }

  const price = card.querySelector('.popup__text--price');
  if (offer.offer.price) {
    price.textContent = `${offer.offer.price}₽`;
  } else {
    price.remove();
  }

  const type = card.querySelector('.popup__type');
  if (offer.offer.type) {
    type.textContent = TYPE_TRANSLATE[offer.offer.type];
  } else {
    type.remove();
  }

  // гостей`;// make funct "1 гостей"
  const guests = card.querySelector('.popup__text--capacity');
  if (offer.offer.guests) {
    guests.textContent = `${offer.offer.rooms} комнаты для ${offer.offer.guests}`;
  } else {
    guests.remove();
  }

  const time = card.querySelector('.popup__text--time');
  if (offer.offer.checkout || offer.offer.checkin) {
    time.textContent = `Заезд после ${offer.offer.checkin}, выезд до ${offer.offer.checkout}`;
  } else {
    time.remove();
  }

  const features = card.querySelector('.popup__features');
  if (!offer.offer.features.length <= 0) {
    deleteUnnecessaryElements(features, offer.offer.features);
  } else {
    features.remove();
  }

  const description = card.querySelector('.popup__description');
  if (offer.offer.description) {
    description.textContent = offer.offer.description;
  } else {
    description.remove();
  }

  const photos = card.querySelector('.popup__photo');
  if (offer.offer.photos) {
    photos.src = offer.offer.photos;
  } else {
    photos.remove();
  }

  const avatar = card.querySelector('.popup__avatar');
  if (offer.author.avatar) {
    avatar.src = offer.author.avatar;
  } else {
    avatar.remove();
  }
  return card;
};


export { mapContainer, createCard };
