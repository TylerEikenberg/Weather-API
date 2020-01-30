require('dotenv').config();
const request = require('request');

const forecast = (longitude, latitude, fn) => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${longitude},${latitude}?exclude=[minutely,hourly,flags]`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      fn(
        (error = {
          message: 'Could not connect to forecast service.'
        }),
        {}
      );
    }

    if (!res.body.currently) {
      fn((error = { message: 'Could not find location' }), {});
    } else {
      fn(
        null,
        (data = {
          temperature: res.body.currently.temperature,
          tempHigh: res.body.daily.data[0].temperatureHigh,
          tempLow: res.body.daily.data[0].temperatureLow,
          precipitation: res.body.currently.precipProbability,
          humidity: res.body.currently.humidity,
          wind: res.body.currently.windSpeed,
          icon: res.body.currently.icon,
          summary: res.body.daily.summary
        })
      );
    }
  });
};

module.exports = forecast;
