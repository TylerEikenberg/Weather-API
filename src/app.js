const express = require('express');
const getWeather = require('../utils/getWeather');

const app = express();

app.get('/weather', (req, res) => {
  getWeather(req.query.address, (data, location, error) => {
    const {
      temperature,
      tempHigh,
      tempLow,
      precipitation,
      humidity,
      wind,
      icon,
      summary
    } = data;
    try {
      res.send({
        temperature,
        tempHigh,
        tempLow,
        precipitation,
        humidity,
        wind,
        icon,
        summary,
        location,
        error
      });
    } catch (error) {
      console.log('error: ', error);
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
