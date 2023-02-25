require("dotenv").config();

const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const host = process.env.HOST;

app.get('/', (req, res) => {
  res.send('Server is working correctly');
});

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`);
});