require('dotenv').config();
const request = require('request');

const forecast = (longitude, latitude, fn) => {
  const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${longitude},${latitude}?exclude=[minutely,hourly,flags]`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      fn({
        error: 'Could not retrieve forecast.'
      });
    }

    console.log(res.body);
    fn({
      temperature: res.body.currently.temperature,
      tempHigh: res.body.daily.data[0].temperatureHigh,
      tempLow: res.body.daily.data[0].temperatureLow,
      precipitation: res.body.currently.precipProbability,
      humidity: res.body.currently.humidity,
      wind: res.body.currently.windSpeed,
      icon: res.body.currently.icon,
      time: res.body.currently.time,
      summary: res.body.daily.summary
    });
  });
};

forecast(
  39,
  -76,
  ({
    temperature,
    precipitation,
    wind,
    icon,
    summary,
    time,
    tempLow,
    tempHigh,
    humidity
  }) => {
    console.log(
      temperature,
      precipitation,
      wind,
      icon,
      summary,
      time,
      tempHigh,
      tempLow,
      humidity
    );
  }
);

module.exports = forecast;

// icons to make
// icons.set("Clear-night", Skycons.CLEAR_NIGHT);
// icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
// icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
// icons.set("Clouds", Skycons.CLOUDY);
// icons.set("Rain", Skycons.RAIN);
// icons.set("Sleet", Skycons.SLEET);
// icons.set("Snow", Skycons.SNOW);
// icons.set("Wind", Skycons.WIND);
// icons.set("Fog", Skycons.FOG);
