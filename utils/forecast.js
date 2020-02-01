require('dotenv').config();
const reqPromise = require('request-promise');

const forecast = async (longitude, latitude) => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${longitude},${latitude}?exclude=[minutely,hourly,flags]`;

  try {
    return await reqPromise({ url, json: true });
  } catch (err) {
    return `${err.statusCode} Invalid Location`;
  }
};

// const getForecast = async () => {
//   const result = await forecast(39.2909, -76.6108);
// };

// getForecast();

module.exports = forecast;
