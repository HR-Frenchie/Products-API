const fs = require('fs');
const original = fs.createReadStream('./data/photos.csv');
const clean = fs.createWriteStream('./data/photos-clean.csv');
original.on('data', (chunk) => {
  let cleaned = chunk.toString().replace(/"/g, '');
  clean.write(cleaned);
});