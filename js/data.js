import { randomNumber, randomFromArray, shuffle } from './utils/get-random.js';

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
  'Cozy and spacious studio with sea view on the 15th floor of the residential complex YALÇIN STAR RESIDENCE, located on Pirosmani street in an area with developed infrastructure. On the ground floor of the complex there is a supermarket YALÇIN MARKET.From the balcony is beautiful view of the sea and the city. Walking distance to sea and beach, aquapark and the seaside Boulevard, singing fountains, cafes and restaurants.',
  'Spacious 1 bedroom studio in Batumi is located in the complex"Real Palace". Flat with sea and mountain views is located on the 24th floor of new building on Pirosmani street. The apartment has two rooms: living room-studio (kitchen, dining room and living room) and one spacious bedroom, in addition entrance hall, bathroom and balcony with sea and mountain views. It offers four beds: double bed in the bedroom and sofa bed for two people.There are all conditions for comfortable stay, Internet, TV, all necessary appliances: refrigerator, washing machine, microwave, electric kettle, iron and Ironing Board, air conditioning winter - summer, gas heating. Near the house there are two supermarkets, Yalchin Market and WILLMART, bus stop and taxi rank, within walking distance – the sea and the beach, water Park and seaside Boulevard with singing fountains, cafes and restaurants.Buses run along the Boulevard and the coast, so you can not get lost.The city center can be reached in 5 - 7 minutes or on foot in 15 - 20 minutes.',
  'The presence of numerous amenities in this apartment will allow guests to feel at home: 1. air conditioning and washing machine. 2. fridge and stove, 3. TV and wireless internet(Wi - Fi), 4. microwave and electric kettle, 5. bed linen towels, hair dryer and iron. From the 26th floor offers stunning views of the sea and the city.Near the house there are two supermarkets, Yalchin Market and WILLMART, bus stop and taxi rank, within walking distance - the sea and the beach, water park and Primorsky Boulevard with singing fountains, cafes and restaurants. Buses run along the boulevard and the coast, so it’s impossible to get lost.The city center can be reached in 7 - 10 minutes or on foot in 20 - 30 minutes.',
  'Cozy bright studio with sea views on the 24th floor of the Real Palace residential complex, located on ul. Pirosmani in an area with developed infrastructure. The apartment can accommodate no more than 3 adult guests or two adults and one child: a bed for two people and a folding chair for one. Bedding, towels and kitchenware are provided.A full - fledged household and technical equipment of this apartment will allow guests to feel comfortable.The apartment has air conditioning, washing machine, refrigerator and microwave, TV and Wi - Fi, electric kettle, hairdryer and iron.',
];

const offers = [];

const addOffers = () => {
  for (let i = 0; i < OFFERS_COUNT; i++) {
    offers.push({
      author: {
        avatar: `img/avatars/user${i + 1 < 10 ? `0${i}` : `''${i}`}.png`,
      },
      offer: {
        titleS: randomFromArray(TITLES),
        address: `${randomNumber(100, 1000)}, ${randomNumber(100, 1000)}`,
        price: randomNumber(100, 1000),
        typeS: randomFromArray(TYPES),
        rooms: randomNumber(1, 4),
        guests: randomNumber(1, 6),
        checking_TIME: randomFromArray(CHECKING_TIME),
        checkout_TIME: randomFromArray(CHECKOUT_TIME),
        features: shuffle(FEATURES).slice(0, randomNumber(0, FEATURES.length)),
        descriptionS: randomFromArray(DESCRIPTIONS),
        photos: randomFromArray(PHOTOS),
      },
      location: {
        lat: randomNumber(35.65000, 35.70000, 5),
        lng: randomNumber(139.70000, 139.80000, 5),
      },
    });
  }
};

addOffers();

export { offers };
