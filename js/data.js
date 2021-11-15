import { makeRequest } from './request.js';
import { showAlert } from './utils/show-alert.js';
import { filterData } from './filter.js';
import { mapLoading } from './map.js';
const mapFilters = document.querySelector('.map__filters');
let copyOfData = [];


const copyData = (data) => {
  copyOfData = data.slice();
  return copyOfData;
};


const onMapFilterChancge = () => {
  filterData(copyOfData);
};


const onSuccess = (data) => {
  copyData(data);
  mapLoading(copyOfData.slice(0, 10));
  mapFilters.addEventListener('change', onMapFilterChancge);
};


const onFail = (err) => {
  showAlert(err);
};


makeRequest(onSuccess, onFail, 'GET');


export { copyOfData };
