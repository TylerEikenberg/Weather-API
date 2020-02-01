const express = require('express');
const getWeather = require('../utils/getWeather');

const app = express();
const port = process.env.PORT || 3000;

app.get('', (req, res) => {
  res.redirect('/weather');
});

app.get('/weather', async (req, res) => {
  const { forecastData, geocodeData } = await getWeather(req.query.address);
  const {
    temperature,
    precipProbability,
    humidity,
    windSpeed,
    icon
  } = forecastData.currently;
  const { temperatureHigh, temperatureLow } = forecastData.daily.data[0];
  const { summary } = forecastData.daily.summary;
  let g = summary;

  res.send({
    g,
    temperature,
    temperatureHigh,
    temperatureLow,
    precipProbability,
    humidity,
    windSpeed,
    icon
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
