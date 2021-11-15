const formAdd = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');
const offerPrice = formAdd.querySelector('#price');
const address = formAdd.querySelector('#address');
const appartmentType = formAdd.querySelector('#type');
const roomNumber = formAdd.querySelector('#room_number');
const capacity = Array.from(document.querySelector('#capacity').children);
const disabledFilelds = document.querySelectorAll('fieldset, select.map__filter');
const timeIn = formAdd.querySelector('#timein');
const timeOut = formAdd.querySelector('#timeout');
const resetBtn = document.querySelector('.ad-form__reset');
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


capacity
  .filter((option) => !(Number(option.value) === 1))
  .forEach((option) => option.style.display = 'none');


const onRoomNumberChage = (evt) => {
  const roomNumberValue = evt.target.value;
  const guestNumberValue = RoomsNumber[roomNumberValue];
  capacity.forEach((option) => {
    const isNecessary = guestNumberValue.some((necessaryValue) => parseInt(option.value, 10) === necessaryValue ? 1 : 0);
    if (!isNecessary) {
      option.style.display = 'none';
    } else {
      option.style.display = 'block';
      option.selected = true;
    }
  });
};


const onTimeInChange = () => {
  timeOut.value = timeIn.value;
};


const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
};


const onAppartmentTypeChange = (evt) => {
  const minPrice = AppartmentType[evt.target.value];
  offerPrice.min = minPrice;
  offerPrice.placeholder = minPrice;
};


const addFormListener = () => {
  appartmentType.addEventListener('change', onAppartmentTypeChange);
  roomNumber.addEventListener('change', onRoomNumberChage);
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
};


const deleteFormListener = () => {
  appartmentType.removeEventListener('change', onAppartmentTypeChange);
  roomNumber.removeEventListener('change', onRoomNumberChage);
  timeIn.removeEventListener('change', onTimeInChange);
  timeOut.removeEventListener('change', onTimeOutChange);
};


const setState = () => {
  disabledFilelds.forEach((field) => {
    field.disabled = !field.disabled;
  });
};


const activate = () => {
  addFormListener();
  setState();
  formAdd.classList.remove('ad-form--disabled');
  formFilter.classList.remove('map__filters--disabled');
  address.readOnly = true;
};


const deactivate = () => {
  deleteFormListener();
  setState();
  formAdd.classList.add('ad-form--disabled');
  formFilter.classList.add('map__filters--disabled');
  address.readOnly = false;
};
deactivate();


const resetAddForm = () => {
  const price = AppartmentType[appartmentType[1].value];
  offerPrice.min = price;
  offerPrice.placeholder = price;
};


export { resetBtn, address, formAdd, formFilter, activate, resetAddForm };

