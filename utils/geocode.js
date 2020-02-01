require('dotenv').config();
const reqPromise = require('request-promise');

const geocode = (location, fn) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${process.env.GEOCODE_TOKEN}&limit=1`;

  reqPromise({ url, json: true })
    .then(res => {
      const [longitude, latitude] = res.features[0].center;
      const location = res.features[0].place_name;
      fn(undefined, { longitude, latitude, location });
    })
    .catch(err => {
      fn(
        (error = {
          message: `${err.statusCode} Could not connect to location services.`
        }),
        {}
      );
    });
};

module.exports = geocode;

// const getgeo = () => {
//   geocode(';', (error, { longitude, latitude, location }) => {
//     console.log(error, longitude, latitude, location);
//   });
// };

// getgeo();
