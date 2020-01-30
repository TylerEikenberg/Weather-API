const express = require('express');
const getWeather = require('../utils/getWeather');

const app = express();

app.get('/weather', (req, res) => {
  getWeather(req.query.address, (error, { data, location }) => {
    if (error) {
      res.send({
        error: error.message
      });
    } else {
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

      res.send({
        temperature,
        tempHigh,
        tempLow,
        precipitation,
        humidity,
        wind,
        icon,
        summary,
        location
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
