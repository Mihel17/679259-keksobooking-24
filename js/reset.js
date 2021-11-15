import { copyOfData } from './get-data.js';
import { resetBtn, formFilter } from './form.js';
import { filterData } from './filter.js';
import { resetMap } from './map.js';


const reset = () => {
  resetMap();
  formFilter.reset();
  filterData(copyOfData);
};


const onResetClick = () => {
  reset();
};
resetBtn.addEventListener('click', onResetClick);


export { reset };


