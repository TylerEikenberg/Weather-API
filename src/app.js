const express = require('express');
const getWeather = require('../utils/getWeather');

const app = express();
const port = process.env.PORT || 3000;

app.get('', (req, res) => {
  res.redirect('/weather');
});

app.get('/weather', async (req, res) => {
  const { error, data, location } = await getWeather(req.query.address);
  if (error) {
    console.log('error', error);
    res.send({
      error
    });
  } else {
    console.log('data', data, location);
    res.send({
      location,
      data
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
