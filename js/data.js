import { getRandomNumber, getRandomFromArray, shuffle } from './utils/get-random.js';

const OFFERS_COUNT = 10;
const TITLES = ['Vista Sunrise Apartments', 'CASA BELLA', 'Chaparral Apartments', '8th And Wake', 'Casa Bonita', 'Villa Anaheim', '238 Termino', 'Artthaus Studios', 'Reflections At Wyandotte', 'Rosewood Park'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHECKING_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const DESCRIPTIONS = [
  'Cozy and spacious studio with sea view on the 15th floor of the residential complex YALÇIN STAR RESIDENCE, located on Pirosmani street in an area with developed infrastructure. On the ground floor of the complex there is a supermarket YALÇIN MARKET. From the balcony is beautiful view of the sea and the city. Walking distance to sea and beach, aquapark and the seaside Boulevard, singing fountains, cafes and restaurants.',
  'Spacious 1 bedroom studio in Batumi is located in the complex"Real Palace". Flat with sea and mountain views is located on the 24th floor of new building on Pirosmani street. The apartment has two rooms: living room-studio (kitchen, dining room and living room) and one spacious bedroom, in addition entrance hall, bathroom and balcony with sea and mountain views. It offers four beds: double bed in the bedroom and sofa bed for two people.',
  'The presence of numerous amenities in this apartment will allow guests to feel at home. Near the house there are two supermarkets, Yalchin Market and WILLMART. The city center can be reached in 7 - 10 minutes or on foot in 20 - 30 minutes.',
  'Cozy bright studio with sea views on the 24th floor of the Real Palace residential complex, located on ul. Pirosmani in an area with developed infrastructure. The apartment can accommodate no more than 3 adult guests or two adults and one child: a bed for two people and a folding chair for one.',
];

const Price = {
  MIN: 0,
  MAX: 1000,
};

const Location = {
  LAT: {
    MIN: 35.65000,
    MAX: 35.70000,
  },
  LNG: {
    MIN: 139.70000,
    MAX: 139.80000,
  },
  AFTER_POINT: 5,
};

const Rooms = {
  MIN: 1,
  MAX: 4,
};

const Guests = {
  MIN: Rooms.MIN,
  MAX: Rooms.MAX * 2,
};

const offers = [];
const addOffers = () => {
  for (let i = 0; i < OFFERS_COUNT; i++) {
    offers.push({
      author: {
        avatar: `img/avatars/user${i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}.png`,
      },
      offer: {
        title: getRandomFromArray(TITLES),
        address: `${getRandomNumber(Location.LAT.MIN, Location.LAT.MAX, Location.AFTER_POINT)}, ${getRandomNumber(Location.LNG.MIN, Location.LNG.MAX, Location.AFTER_POINT)}`,
        price: getRandomNumber(Price.MIN, Price.MAX),
        type: getRandomFromArray(TYPES),
        rooms: getRandomNumber(Rooms.MIN, Rooms.MAX),
        guests: getRandomNumber(Guests.MIN, Guests.MAX),
        checkin: getRandomFromArray(CHECKING_TIME),
        checkout: getRandomFromArray(CHECKOUT_TIME),
        features: shuffle(FEATURES).slice(0, getRandomNumber(0, FEATURES.length)),
        description: getRandomFromArray(DESCRIPTIONS),
        photos: getRandomFromArray(PHOTOS),
      },
      location: {
        lat: getRandomNumber(Location.LAT.MIN, Location.LAT.MAX, Location.AFTER_POINT),
        lng: getRandomNumber(Location.LNG.MIN, Location.LNG.MAX, Location.AFTER_POINT),
      },
    });
  }
};

addOffers();

export { offers };
