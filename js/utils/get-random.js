//RANDOM NUMBER ---------------------
function randomInt(min, max) {
  if (min >= 0 && max >= 0) {
    const rand = Math.round(min + (Math.random() * (max - min)));
    return (rand < 10 ? '0' : '') + rand;
  }
  return 'The range can only be positive, including zero!';
}

function randomNumber(min, max, afterPoint) {
  if (min >= 0 && max >= 0 && afterPoint >= 0) {
    const rand = min + (Math.random() * (max - min));
    return Number(rand.toFixed(afterPoint));
  }
  return 'The range can only be positive, including zero!';
}
//-------------------------------


//RANDOM ELEMENT FROM ARRAY -----
const randomFromArray = ((randNumber, array) => array[randNumber]);
//-------------------------------


//MIX ARRAY --------------------
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
//-------------------------------

//GET RANDOM STR FROM ARRAY -----
// ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'] => 'parking, elevator, wifi'
function randomStrFromArray(array) {
  const newArray = array.map((element) => element);
  shuffle(newArray);
  const newLength = Math.ceil(Math.random() * array.length);
  const portion = newArray.slice(0, newLength);
  return portion.join(', ');
}
//-------------------------------

//EXPORT-------------------------
export { randomInt, randomNumber, randomFromArray, randomStrFromArray, shuffle };
//-------------------------------

//END-----------------------------
