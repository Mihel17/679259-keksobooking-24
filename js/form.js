const formAdd = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const offerTitle = document.querySelector('#title');
const MIN_TITLE_LENGHT = 30;
const MAX_TITLE_LENGHT = 100;
const offerPrice = document.querySelector('#price');
const MAX_PRICE = 1000000;
const MAX_PRICE_READABLE = '1 000 000';
const appartmentType = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const capacity = Array.from(document.querySelector('#capacity').children);

// capacity.forEach((option) => {
//   console.log(option.value);
// });

const AppartmentType = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const RoomsNumber = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const onRoomNumberChage = (evt) => {
  const roomNumberValue = evt.target.value;
  const guestNumberValue = RoomsNumber[roomNumberValue];

  capacity.forEach((option) => {
    option.style.display = 'block';

    const isNecessary = guestNumberValue.some((necessaryValue) => Number(option.value) === necessaryValue ? 1 : 0);
    if (!isNecessary) {
      option.style.display = 'none';
      option.selected = false;
    }

    if (isNecessary) {
      option.selected = true;
    }
  });
};
roomNumber.addEventListener('change', onRoomNumberChage);


const onAppartmentTypeChange = (evt) => {
  const minPrice = AppartmentType[evt.target.value];
  offerPrice.min = minPrice;
  offerPrice.placeholder = minPrice;
};
appartmentType.addEventListener('change', onAppartmentTypeChange);

// if (offerTitle.attr('type') === 'text') {
//   console.log(offerTitle.validity);
// }

const onOfferTitleInput = () => {
  if (offerTitle.value.length < MIN_TITLE_LENGHT) {
    offerTitle.setCustomValidity(`Ещё ${MIN_TITLE_LENGHT - offerTitle.value.length} симв.`);
  } else if (offerTitle.value.length > MAX_TITLE_LENGHT) {
    offerTitle.setCustomValidity(`Удалите лишние ${offerTitle.value.length - MAX_TITLE_LENGHT} симв.`);
  }
  else {
    offerTitle.setCustomValidity('');
  }
  offerTitle.reportValidity();
};
offerTitle.addEventListener('input', onOfferTitleInput);

const onOfferPriceInput = () => {
  if (offerPrice.value < MAX_PRICE) {
    offerPrice.valid = true;
    offerPrice.setCustomValidity('');
  } else {
    offerPrice.setCustomValidity(`Максимальное значение ${MAX_PRICE_READABLE} руб.`);
    offerPrice.valid = false;
  }
  offerPrice.reportValidity();
};
offerPrice.addEventListener('input', onOfferPriceInput);

const deleteFormListener = () => {
  appartmentType.removeEventListener('change', onAppartmentTypeChange);
  offerTitle.removeEventListener('input', onOfferTitleInput);
  offerPrice.removeEventListener('input', onOfferPriceInput);
};

export { formAdd, filter, deleteFormListener };
