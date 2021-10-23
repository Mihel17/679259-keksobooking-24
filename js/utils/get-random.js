//RANDOM NUMBER ---------------------
const randomNumber = (min, max, afterPoint) => {
  if (afterPoint) {
    if (min >= 0 && max >= 0 && afterPoint >= 0) {
      const rand = min + (Math.random() * (max - min));
      return Number(rand.toFixed(afterPoint));
    }
    return -1;
  } else {
    if (min >= 0 && max >= 0) {
      afterPoint = 0;
      const rand = min + (Math.random() * (max - min));
      return Number(rand.toFixed(afterPoint));
    }
    return -1;
  }
};

randomNumber(1, 20, 1);
//-------------------------------


//RANDOM ELEMENT FROM ARRAY -----
const randomFromArray = (array) => array[randomNumber(0, array.length - 1, 0)];
//-------------------------------


//MIX ARRAY --------------------
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
//-------------------------------

//EXPORT-------------------------
export { randomNumber, randomFromArray, shuffle };
//-------------------------------

//END-----------------------------
