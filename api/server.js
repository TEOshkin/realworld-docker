require('dotenv').config();

const express = require('express');

//Constants
const port = process.env.PORT || 8080;
const host = process.env.HOST;

//App
const app = express();
app.get('/', (req, res) => {
  res.send('Web server is working correctly!');
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});