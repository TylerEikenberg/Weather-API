require('dotenv').config();
const request = require('request-promise');

const forecast = async (longitude, latitude) => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${longitude},${latitude}?exclude=[minutely,hourly,flags]`;

  try {
    return (data = await request({ url, json: true }));
  } catch (error) {
    return (error = error);
  }
};

module.exports = forecast;
