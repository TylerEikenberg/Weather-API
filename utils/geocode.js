require('dotenv').config();
const reqPromise = require('request-promise');

const geocode = async location => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.GEOCODE_TOKEN}&limit=1`;

  try {
    return await reqPromise({ url, json: true });
  } catch (err) {
    return `${err.statusCode} Could not connect.`;
  }
};

module.exports = geocode;

// const getgeo = async () => {
//   const result = await geocode('baltimore');
//   console.log(result.features[0].center);
// };

// getgeo();
