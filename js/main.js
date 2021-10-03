function randomInt(min, max) {
  if (min >= 0 && max >= 0) {
    const rand = Math.round(min + (Math.random() * (max - min)));
    return rand;
  }

  return 'The range can only be positive, including zero!';
}

randomInt(0, 10);

function randomNumber(min, max, afterPoint) {
  if (min >= 0 && max >= 0 && afterPoint >= 0) {
    const rand = min + (Math.random() * (max - min));
    return Number(rand.toFixed(afterPoint));
  }

  return 'The range can only be positive, including zero!';
}

randomNumber(0, 10, 0);
