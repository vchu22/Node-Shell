const request = require('request');
module.exports = (url, done) => {
  request(url, function(err, res, body) {
    const str = `error: ${err}\nStatus Code: ${res &&
      res.statusCode}\nbody:${body}`;
    done(str);
  });
};
