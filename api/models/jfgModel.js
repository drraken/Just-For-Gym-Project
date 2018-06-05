'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
 login: String,
 password: Number 
});

const UserChar = mongoose.model('User', UserSchema);

module.exports = UserChar;

