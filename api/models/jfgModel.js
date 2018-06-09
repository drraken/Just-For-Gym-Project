'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
 login: String,
 email: String,
 password: String 
});

const UserChar = mongoose.model('User', UserSchema);

module.exports = UserChar;

