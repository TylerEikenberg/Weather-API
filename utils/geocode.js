/**
 * create function that converts location to coordinates
 */
require('dotenv').config();
const request = require('request');

const geocode = (location, fn) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.GEOCODE_TOKEN}&limit=1`;

  request({ url, json: true }, (error, res) => {
    if (error) {
      console.log('Unable to connect to location services.');
    }
    if (res.body.features) {
      console.log(res.body.features);
    } else {
      console.log('Error: Could not find location.');
    }
  });
};

geocode('baltimore');
