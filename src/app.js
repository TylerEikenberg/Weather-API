const express = require('express');
const getWeather = require('../utils/getWeather');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('', (req, res) => {
  res.redirect('/weather');
});

app.get('/weather', async (req, res) => {
  const { error, data, location } = await getWeather(req.query.address);
  if (error) {
    res.send({
      error
    });
  } else {
    res.send({
      location,
      data
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
