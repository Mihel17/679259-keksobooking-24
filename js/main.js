function randomInt(min, max) {
  if (min >= 0 && max >= 0) {
    const rand = Math.round(min + (Math.random() * (max - min)));
    return (rand < 10 ? '0' : '') + rand;
  }
  return 'The range can only be positive, including zero!';
}

function randomNumber(min, max, afterPoint) {
  if (min >= 0 && max >= 0 && afterPoint >= 0) {
    const rand = min + (Math.random() * (max - min));
    return Number(rand.toFixed(afterPoint));
  }
  return 'The range can only be positive, including zero!';
}

const randomFromArray = (randomNumber, array) => {
  return array[randomNumber];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomStrFromArray(array) {
  const newArray = array.map(element => element);
  shuffle(newArray);
  let newLength = Math.ceil(Math.random() * array.length);
  let portion = newArray.slice(0, newLength);
  return portion.join(', ');
}

// -----------------------------------------------------

const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const checking = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];


for (let i = 0; i < 5; i++) {
  const offers = {
   author: {
     avatar: 'img/avatars/user' + randomInt(0, 10) + '.png',
   },
   offer: {
     title: 'title',
      address: 'address',
      price: randomNumber(100, 1000, 0),
      type: randomFromArray(randomNumber(0, type.length - 1, 0), type),
      rooms: randomNumber(1, 4, 0),
      guests: randomNumber(1, 6, 0),
      checking: randomFromArray(randomNumber(0, checking.length - 1, 0), checking),
      checkout: randomFromArray(randomNumber(0, checkout.length - 1, 0), checkout),
      features: randomStrFromArray(features),
      description: 'description',
   },
   location: {
     lat: randomNumber(35.65000, 35.70000, 5),
     lng: randomNumber(139.70000, 139.80000, 5),
   }
   }
  console.log(offers);
}
// -----------------------------------------------------


