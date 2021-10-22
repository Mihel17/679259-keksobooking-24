//RANDOM NUMBER ---------------------
const randomInt = (min, max) => {
  if (min >= 0 && max >= 0) {
    const rand = Math.round(min + (Math.random() * (max - min)));
    return (rand < 10 ? '0' : '') + rand;
  }
  return 'The range can only be positive, including zero!';
};

const randomNumber = (min, max, afterPoint) => {
  if (min >= 0 && max >= 0 && afterPoint >= 0) {
    const rand = min + (Math.random() * (max - min));
    return Number(rand.toFixed(afterPoint));
  }
  return 'The range can only be positive, including zero!';
};
//-------------------------------


//RANDOM ELEMENT FROM ARRAY -----
const randomFromArray = (randNumber, array) => array[randNumber];
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
export { randomNumber, randomFromArray, shuffle, randomInt };
//-------------------------------

//END-----------------------------
