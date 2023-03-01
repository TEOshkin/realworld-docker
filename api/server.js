const express = require('express');

//App
const app = express();
app.get('/', (req, res) => {
  res.send('Web server is working correctly!');
});

module.exports.startServer = (port, host) => {
  app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
};

//Здійснюємо запити в БД
const {User} = require("./../models/user");

app.get('/users', async (req, res) => {
  try {
    const user = new User({firstName: "Alex", lastName: "Kuzmenko"});
    await user.save();
    const users = await User.find();
    res.json({users})
  } catch (err) {
      res.send({err})
  }
});