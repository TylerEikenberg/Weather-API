const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = async userLocation => {
  const geoFetch = await geocode(userLocation);
  if (geoFetch.error || geoFetch.features.length === 0) {
    return { error: 'Invalid location.' };
  } else {
    const forecastFetch = await forecast(
      geoFetch.features[0].center[1],
      geoFetch.features[0].center[0]
    );
    if (forecastFetch.statusCode) {
      return forecastFetch.message;
    } else {
      return { data: forecastFetch, location: geoFetch.features[0].place_name };
    }
  }
};
// handle error for this function then put it in the main app
// ya did it, buddy.
const useGetWeather = async () => {
  const { error, data, location } = await getWeather('pittsburgh');
  if (error) {
    console.log('error', error);
  } else {
    console.log('data', data, location);
  }
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
