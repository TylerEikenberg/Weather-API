const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = async userLocation => {
  const geoFetch = await geocode(userLocation);
  if (geoFetch.error || geoFetch.features.length === 0) {
    return 'Error: Invalid location.';
  } else {
    const forecastFetch = await forecast(
      geoFetch.features[0].center[0],
      geoFetch.features[0].center[1]
    );
    if (forecastFetch.statusCode) {
      return forecastFetch.message;
    } else {
      return { data: forecastFetch, location: geoFetch.features[0].place_name };
    }
  }
};

const useGetWeather = async () => {
  const data = await getWeather('!');
  console.log('data: ', data);
};

useGetWeather();

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
