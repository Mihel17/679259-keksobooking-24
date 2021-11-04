import { createCard } from './create-card.js';
import { offers } from './data.js';
const resetBtn = document.querySelector('.ad-form__reset');

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
    const marker = L.marker(
      {
        lat: offerData.location.lat,
        lng: offerData.location.lng,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(createCard(offerData));
  };

  offers.forEach((item) => {
    makeMarker(item);
  });

  const mainPinIcon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
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

  markerGroup.clearLayers();
};

turnOnMap();
