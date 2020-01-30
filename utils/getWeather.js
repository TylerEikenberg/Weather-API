// combines forecast and geocode
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
          dataHandler(data);
        }
      });
    }
  });
};

getWeather('baltimore', data => {
  console.log(data);
});

// const getgeo = () => {
//   geocode(';', (error, { longitude, latitude, location }) => {
//     console.log(error, longitude, latitude, location);
//   });
// };

module.exports = getWeather;
