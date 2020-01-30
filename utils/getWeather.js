const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = (userLocation = 'Baltimore', dataHandler) => {
  geocode(userLocation, (geoError, { longitude, latitude, location }) => {
    if (geoError) {
      dataHandler(geoError, {});
    } else {
      forecast(latitude, longitude, (forecastError, data) => {
        if (forecastError) {
          dataHandler(forecastError, {});
        } else {
          dataHandler(undefined, { data, location });
        }
      });
    }
  });
};

module.exports = getWeather;
