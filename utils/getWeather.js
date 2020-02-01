const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = async (userLocation = 'Baltimore') => {
  const geocodeData = await geocode(userLocation);
  const forecastData = await forecast(
    geocodeData.features[0].center[1],
    geocodeData.features[0].center[0]
  );

  return { forecastData, geocodeData };
};

module.exports = getWeather;

getWeather();
