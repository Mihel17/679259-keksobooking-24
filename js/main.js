function randomInt(min, max) {
  if (min >= 0 && max >= 0) {
    const rand = Math.round(min + (Math.random() * (max - min)));
    return (rand < 10 ? '0' : '') + rand;
  }
  return 'The range can only be positive, including zero!';
}

randomInt(0, 10);

// -----------------------------------------------------

function randomNumber(min, max, afterPoint) {
  if (min >= 0 && max >= 0 && afterPoint >= 0) {
    const rand = min + (Math.random() * (max - min));
    return Number(rand.toFixed(afterPoint));
  }
  return 'The range can only be positive, including zero!';
}

randomNumber(0, 10, 0);



// =====================================================
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// =====================================================



const randomFromArray = (randomNumber, array) => {
  return array[randomNumber];
}

// ------------------------------------------

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ------------------------------------------

function randomArray(array) {
  const arrayFeatures = array.map(element => element);
  shuffle(arrayFeatures);
  let newLength = Math.ceil(Math.random() * features.length);
  let portion = arrayFeatures.slice(0, newLength);
  return portion;
}

// -----------------------------------------------------

const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const offers = {
  author: {
    avatar: 'img/avatars/user' + randomInt(0, 10) + '.png',
  },
  offer: {
    title: 'title',
    address: 'address',
    price: 0,
    type: randomFromArray(randomNumber(0, type.length - 1, 0), type),
    rooms: 0,
    guests: 0,
    checking: 'hz',
    checkout: 'hz',
    features: randomArray(features),
    description: 'description',
  },
  location: {
    lat: randomNumber(35.65000, 35.70000, 5),
    lng: randomNumber(139.70000, 139.80000, 5),
  }
}

console.log(offers);

// -----------------------------------------------------


