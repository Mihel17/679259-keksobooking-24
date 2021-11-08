import { createCard } from './create-card.js';
// import { offers } from './data.js';
import { request } from './request.js';
import { activate, resetBtn, address, form } from './form.js';
const COPY_OPEN_MAP = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const LINK_OPEN_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TokioLocation = {
  LAT: 35.658581,
  LNG: 139.745438,
};
const Icon = {
  MAIN: {
    WIDTH: 52,
    HEIGHT: 52,
  },
  DEFAULT: {
    WIDTH: 40,
    HEIGHT: 40,
  },
  ANCHOR: {
    X: 26,
    Y: 52,
  },
};


const map = L.map('map');
const markerGroup = L.layerGroup().addTo(map);


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [Icon.MAIN.WIDTH, Icon.MAIN.HEIGHT],
  iconAnchor: [Icon.ANCHOR.X, Icon.ANCHOR.Y],
});
const mainPinMarker = L.marker(
  {
    lat: TokioLocation.LAT,
    lng: TokioLocation.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);


const turnOnMap = (dataList) => {
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    address.value = evt.target.getLatLng();
  });
  const addMarkers = (offerData) => {
    const pinIcon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [Icon.DEFAULT.WIDTH, Icon.DEFAULT.HEIGHT],
      iconAnchor: [Icon.ANCHOR.X, Icon.ANCHOR.Y],
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
  // dataList.forEach((item) => {
  //   console.log(item);
  //   addMarkers(item);
  // });
  for (let i = 0; i < 3; i++) {
    console.log(dataList[i]);
    addMarkers(dataList[i]);
  }
};


const mapLoading = (data) => {
  map.on('load', () => {
    activate();
    turnOnMap(data);
  }).setView({
    lat: TokioLocation.LAT,
    lng: TokioLocation.LNG,
  }, 10);
  L.tileLayer(
    LINK_OPEN_MAP,
    {
      attribution: COPY_OPEN_MAP,
    },
  ).addTo(map);
};


const resetMap = () => {
  markerGroup.clearLayers();
  mainPinMarker.setLatLng({
    lat: TokioLocation.LAT,
    lng: TokioLocation.LNG,
  });
  map.setView({
    lat: TokioLocation.LAT,
    lng: TokioLocation.LNG,
  }, 10);
  turnOnMap();
};
resetBtn.addEventListener('click', resetMap);


let offers = [];

const onSuccess = (data) => {
  offers = data.slice();
  mapLoading(offers);
};

const onFail = (err) => {
  alert(err);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  request(
    onSuccess(),
    onFail('Не удалось отправить форму. Попробуйте ещё раз'),
    new FormData(evt.target),
  );
});

request(onSuccess, onFail, 'GET');

