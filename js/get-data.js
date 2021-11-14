import { request } from './request.js';
import { mapLoading } from './map.js';
import { showAlert } from './utils/show-alert.js';
let offers = [];


const onSuccess = (data) => {
  offers = data.slice();
  mapLoading(offers);
};


const onFail = (err) => {
  showAlert(err);
};


request(onSuccess, onFail, 'GET');
