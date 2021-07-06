var mongoose = require('mongoose')
var Schema = require('mongoose').Schema;

const User = new Schema({
    username: String, 
    password: String
});

module.exports = mongoose.model("users", User);