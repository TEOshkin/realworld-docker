const mongoose = require('mongoose');

//Model Scheme
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

//Model
const User = mongoose.model('User', UserSchema);

module.exports.User = User