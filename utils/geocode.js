/**
 * create function that converts location to coordinates
 */
require('dotenv').config();
const request = require('request');

const geocode = (location, fn) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${GEOCODE_TOKEN}&limit=1`;
};
