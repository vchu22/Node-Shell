const fs = require('fs');

module.exports = filename => {
  let str = fs.readFile(filename);
  process.stdout.write(str);
  process.stdout.write('prompt > ');
};
