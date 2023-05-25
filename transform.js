const fs = require('fs');
const original = fs.createReadStream('./data/photos.csv');
const cleaned = fs.createWriteStream('./data/photos-clean.csv');
original.on('data', (chunk) => {
  let lines = chunk.toString().split('\n');
  lines.forEach((line, index) => {
    // last "line" of stream is partial line
    if (index === lines.length - 1) {
      cleaned.write(line);
    } else {
      if (!line.endsWith('"')) line = line.concat('"');
      cleaned.write(line + '\n');
    }
  });
});