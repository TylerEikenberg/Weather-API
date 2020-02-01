require('dotenv').config();
const request = require('request-promise');

// rewrite function to use async await
// if error return error
// if success return correct data

const geocode = async location => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.GEOCODE_TOKEN}&limit=1`;

  try {
    return await request({ url, json: true });
  } catch (error) {
    return error;
  }
};

module.exports = geocode;

const getGeo = async location => {
  const { features } = await geocode(location);
  const { place_name } = features[0];
  const [longitude, latitude] = features[0].center;
  console.log(longitude, latitude);
};
getGeo(';');

// locationName = result.features[0].place_name;
// longitude = result.features[0].center[0]
// latitude = result.features[0].center[1]
