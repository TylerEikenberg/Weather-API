const express = require(express);
const app = express();

app.get('/weather', (req, res) => {
  // pass req.query.location to getForecast
  // res.send info
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
