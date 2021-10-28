const formAdd = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const offerPrice = formAdd.querySelector('#price');
const address = formAdd.querySelector('#address');
const appartmentType = formAdd.querySelector('#type');
const roomNumber = formAdd.querySelector('#room_number');
const capacity = Array.from(document.querySelector('#capacity').children);
const disabledFilelds = document.querySelectorAll('fieldset, select.map__filter');
const timeIn = formAdd.querySelector('#timein');
const timeInOptions = Array.from(formAdd.querySelector('#timein').children);
const timeOut = formAdd.querySelector('#timeout');
const timeOutOptions = Array.from(formAdd.querySelector('#timeout').children);

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

const TimeIn = {
  '12:00': ['12:00'],
  '13:00': ['12:00', '13:00'],
  '14:00': ['12:00', '13:00', '14:00'],
};

const TimeOut = {
  '12:00': ['12:00', '13:00', '14:00'],
  '13:00': ['12:00', '13:00'],
  '14:00': ['12:00'],
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
roomNumber.addEventListener('change', onRoomNumberChage);

const onTimeInChange = (evt) => {
  const valueIn = TimeIn[evt.target.value];
  timeOutOptions.forEach((option) => {
    const isNecessary = valueIn.some((necessaryValue) => option.value === necessaryValue ? 1 : 0);
    if (!isNecessary) {
      option.style.display = 'none';
    } else {
      option.style.display = 'block';
      option.selected = true;
    }
  });
};
timeIn.addEventListener('change', onTimeInChange);

const onTimeOutChange = (evt) => {
  const valueOut = TimeOut[evt.target.value];
  timeInOptions.forEach((option) => {
    const isNecessary = valueOut.some((necessaryValue) => option.value === necessaryValue ? 1 : 0);
    if (!isNecessary) {
      option.style.display = 'none';
    } else {
      option.style.display = 'block';
      option.selected = true;
    }
  });
};
timeOut.addEventListener('change', onTimeOutChange);

const onAppartmentTypeChange = (evt) => {
  const minPrice = AppartmentType[evt.target.value];
  offerPrice.min = minPrice;
  offerPrice.placeholder = minPrice;
};
appartmentType.addEventListener('change', onAppartmentTypeChange);

const deleteFormListener = () => {
  appartmentType.removeEventListener('change', onAppartmentTypeChange);
  roomNumber.removeEventListener('change', onRoomNumberChage);
};

const setDisabledState = () => {
  disabledFilelds.forEach((field) => {
    field.disabled = !field.disabled;
  });
};

const activate = () => {
  formAdd.classList.remove('ad-form--disabled');
  filter.classList.remove('map__filters--disabled');
  setDisabledState();
  address.readOnly = true;
};

const deactivate = () => {
  deleteFormListener();
  formAdd.classList.add('ad-form--disabled');
  filter.classList.add('map__filters--disabled');
  setDisabledState();
  address.readOnly = false;
};

// deactivate();
// activate();
