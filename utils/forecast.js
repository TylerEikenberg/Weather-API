require('dotenv').config();
const request = require('request-promise');

const forecast = async (longitude, latitude, fn) => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${longitude},${latitude}?exclude=[minutely,hourly,flags]`;

  try {
    return (data = await request({ url, json: true }));
  } catch (error) {
    return (error = error);
  }
};

const getFore = async () => {
  const response = await forecast(-79.14, 32.5);
  // const response = await forecast('!', 0);
  if (response.statusCode) {
    console.log(response.message);
  } else {
    console.log(response.currently.temperature);
  }
};

// getFore();

module.exports = forecast;

//           temp: res.currently.temperature,
//           tempHigh: res.daily.data[0].temperatureHigh,
//           tempLow: res.daily.data[0].temperatureLow,
//           precipitation: res.currently.precipProbability,
//           humidity: res.currently.humidity,
//           wind: res.currently.windSpeed,
//           icon: res.currently.icon,
//           summary: res.daily.summary
