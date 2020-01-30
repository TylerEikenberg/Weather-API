require('dotenv').config();
const request = require('request');

const geocode = (location, fn) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.GEOCODE_TOKEN}&limit=1`;

  request({ url, json: true }, (error, res) => {
    if (error) {
      fn(
        (error = {
          message: 'Could not connect to location services'
        }),
        {}
      );
    }
    if (!res.body.features) {
      fn(
        (error = {
          message: 'Could not find location'
        }),
        {}
      );
    } else {
      fn(undefined, {
        longitude: res.body.features[0].center[0],
        latitude: res.body.features[0].center[1],
        location: res.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;

// const getgeo = () => {
//   geocode(';', (error, { longitude, latitude, location }) => {
//     console.log(error, longitude, latitude, location);
//   });
// };

// getgeo();
