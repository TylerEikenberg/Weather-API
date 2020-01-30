// combines forecast and geocode
const geocode = require('./geocode');
const forecast = require('./forecast');

const getWeather = (userLocation, dataHandler) => {
  geocode(userLocation, (geoError, { longitude, latitude, location }) => {
    dataHandler({
      longitude,
      latitude,
      location
    });
  });
};

// const getgeo = () => {
//   geocode(';', (error, { longitude, latitude, location }) => {
//     console.log(error, longitude, latitude, location);
//   });
// };

getWeather('Baltimore', ({ longitude, latitude, location }) => {
  console.log(longitude, latitude, location);
});

module.exports = getWeather;
