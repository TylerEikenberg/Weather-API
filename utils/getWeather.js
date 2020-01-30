const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = (userLocation, dataHandler) => {
  geocode(userLocation, (geoError, { longitude, latitude, location }) => {
    if (geoError) {
      dataHandler(geoError.message);
    } else {
      forecast(latitude, longitude, (forecastError, data) => {
        if (forecastError) {
          dataHandler(forecastError.message);
        } else {
          dataHandler(data, location, geoError);
        }
      });
    }
  });
};

module.exports = getWeather;
