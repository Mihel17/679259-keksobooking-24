function randomNumber(min, max, afterPoint) {
  if (min >= 0 && max >= 0 && afterPoint >= 0) {
    let rand = min + (Math.random() * (max - min));
    return Number(rand.toFixed(afterPoint));
  }

  alert('The range can only be positive, including zero!')
}

randomNumber(0, 10, 0);
