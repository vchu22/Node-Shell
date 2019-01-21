const fs = require('fs');

module.exports = (filename, done) => {
  fs.readFile(filename, (err, data) => {
    if (err) {
      done('Something is wrong!');
    } else {
      done(data);
    }
  });
};
