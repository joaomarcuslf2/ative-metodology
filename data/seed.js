const fs = require('fs-extra');
const logger = require('../helpers/log.js');

function getRandomArbitrary(min, max) {
  return Math.abs(Math.random() * (parseInt(max) - parseInt(min))) + parseInt(min);
}

const arr = [];

const [
  minQuant = 300,
  maxQuant = 10000,
  minRate = 1200,
  maxRate = 2400,
] = process.argv.slice(2);

const length = parseInt(getRandomArbitrary(minQuant, maxQuant));

logger(`Data length: ${length}`);

for (let i = 0; i < length; i++) {
  arr.push({
    user: i,
    rating: parseInt(getRandomArbitrary(minRate, maxRate)),
  });

  if (i % 1000000 === 0) {
    logger(`Backup writing on index: ${i}`);
    fs.writeFileSync('./data/data.json', JSON.stringify(arr));
  }
}

fs.writeFileSync('./data/data.json', JSON.stringify(arr));
