const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = async userLocation => {
  const geoFetch = await geocode(userLocation);
  if (geoFetch.error || geoFetch.features.length === 0) {
    return 'Error: Invalid location.';
  } else {
    const { place_name } = geoFetch.features[0];
    const [longitude, latitude] = geoFetch.features[0].center;
    console.log(place_name, longitude, latitude);
  }
};

getWeather('baltimore');

// const getWeather = (userLocation = 'Baltimore', dataHandler) => {
//   geocode(userLocation, (geoError, { longitude, latitude, location }) => {
//     if (geoError) {
//       dataHandler(geoError, {});
//     } else {
//       forecast(latitude, longitude, (forecastError, data) => {
//         if (forecastError) {
//           dataHandler(forecastError, {});
//         } else {
//           dataHandler(undefined, { data, location });
//         }
//       });
//     }
//   });
// };

module.exports = getWeather;
