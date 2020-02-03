require('dotenv').config();
const request = require('request-promise');

const geocode = async location => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.GEOCODE_TOKEN}&limit=1`;

  try {
    return (data = await request({ url, json: true }));
  } catch (error) {
    return (error = error);
  }
};

module.exports = geocode;
