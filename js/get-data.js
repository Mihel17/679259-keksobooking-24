import { request } from './request.js';
import { showAlert } from './utils/show-alert.js';
import { filterData } from './filter.js';
import { mapLoading } from './map.js';
const mapFilters = document.querySelector('.map__filters');
let filterResult = [];


const copyData = (data) => {
  filterResult = data.slice();
  return filterResult;
};


const onMapFilterChancge = () => {
  filterData(filterResult);
};


const onSuccess = (data) => {
  copyData(data);
  mapLoading(filterResult.slice(0, 10));
  mapFilters.addEventListener('change', onMapFilterChancge);
};


const onFail = (err) => {
  showAlert(err);
};


request(onSuccess, onFail, 'GET');
