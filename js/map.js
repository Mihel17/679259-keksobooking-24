import { createCard } from './create-card.js';
import { offers } from './data.js';
import { filter } from './form.js';
const resetBtn = document.querySelector('.ad-form__reset');
const housingType = document.querySelector('#housing-type');
const houstingRooms = document.querySelector('#housing-rooms');
const houstingGuests = document.querySelector('#housing-guests');
// const houstingPrice = document.querySelector('#housing-price');

const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
    // turnOnMap();
  })
  .setView({
    lat: 35.658581,
    lng: 139.745438,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const turnOnMap = () => {
  const markerGroup = L.layerGroup().addTo(map);
  const makeMarker = (offerData) => {
    const pinIcon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [26, 52],
    });

    const marker = L.marker(
      {
        lat: offerData.location.lat,
        lng: offerData.location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(createCard(offerData));
  };

  filter.addEventListener('change', () => {
    markerGroup.clearLayers();
    offers
      .filter((item) => housingType[0].value === housingType.value ? item = true : !item || item.offer.type === housingType.value)
      .filter((item) => houstingRooms[0].value === houstingRooms.value ? item = true : !item || item.offer.rooms === Number(houstingRooms.value))
      .filter((item) => houstingGuests[0].value === houstingGuests.value ? item = true : !item || item.offer.guests === Number(houstingGuests.value))
      .forEach((item) => {
        console.log(item);
        makeMarker(item);
      });
  });


  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.658581,
      lng: 139.745438,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
  });

  resetBtn.addEventListener('click', () => {
    mainPinMarker.setLatLng({
      lat: 35.658581,
      lng: 139.745438,
    });

    map.setView({
      lat: 35.658581,
      lng: 139.745438,
    }, 10);
  });
};

turnOnMap();
