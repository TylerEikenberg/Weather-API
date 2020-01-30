const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = (userLocation, dataHandler) => {
  geocode(userLocation, (geoError, { longitude, latitude, location }) => {
    if (geoError) {
      dataHandler({ error: 'Could not connect to location services' });
    } else {
      forecast(latitude, longitude, (forecastError, data) => {
        if (forecastError) {
          dataHandler({ error: 'Could not connect to location services' });
        } else {
          dataHandler(data, location);
        }
      });
    }
  });
};

// getWeather('baltimore', (data, location) => {
//   console.log(data, location);
// });

module.exports = getWeather;
