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

// figure out how to get error from geocode when error occurs
// const getGeo = async location => {
//   const response = await geocode(location);
//   if (response.error || response.features.length === 0) {
//     console.log('Error: Invalid location.');
//   } else {
//     const { place_name } = response.features[0];
//     const [longitude, latitude] = response.features[0].center;
//     console.log(place_name, longitude, latitude);
//   }
// };
// getGeo('lab');

// locationName = result.features[0].place_name;
// longitude = result.features[0].center[0]
// latitude = result.features[0].center[1]
