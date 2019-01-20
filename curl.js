const request = require('request');
module.exports = url => {
  request(url, function(err, res, body) {
    console.log('error:', err);
    console.log('Status Code:', res && res.statusCode);
    console.log('body:', body);
    process.stdout.write('prompt > ');
  });
};
