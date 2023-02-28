const mongoose = require('mongoose');
const {db} = require('./index.js');
const {User} = require("../models/user")

module.exports.connectDB = () => {
    mongoose.connect(db, {userNewUrkParser:true});
    return mongoose.connection
}