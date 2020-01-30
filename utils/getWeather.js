// combines forecast and geocode
const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = (location, dataHandler) => {
  geocode(location, (geoError, { longitude, latitude, location }) => {
    if (geoError) {
      dataHandler(geoError);
    }
    forecast(longitude, latitude, (forecastError, data) => {
      if (forecastError) {
        dataHandler(forecastError);
      }
    });
  });
};
