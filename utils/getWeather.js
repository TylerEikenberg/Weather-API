const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = async userLocation => {
  const geoFetch = await geocode(userLocation);
  if (geoFetch.error || geoFetch.features.length === 0) {
    return { error: '400, Invalid location.' };
  } else {
    const [latitude, longitude] = geoFetch.features[0].center;
    const forecastFetch = await forecast(longitude, latitude);
    if (forecastFetch.statusCode) {
      return forecastFetch.message;
    } else {
      return { data: forecastFetch, location: geoFetch.features[0].place_name };
    }
  }
};
module.exports = getWeather;
