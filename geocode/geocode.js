const request = require('request');

var geocodeAddress = (address, callback) => {
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      // if error object is not null
      callback('Unable to connect to Google servers');
      // console.log('Unable to connect to Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
      // console.log('Unable to find that address');
    } else if (body.status == 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
      // console.log(`Address: ${body.results[0].formatted_address}`);
      // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
      // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
    // console.log(JSON.stringify(body, undefined, 1));
    // console.log(JSON.stringify(response, undefined, 1));
    // response contains statusCode and body. response.body gives HTTP body.
  });
};

module.exports = {
  geocodeAddress
}
