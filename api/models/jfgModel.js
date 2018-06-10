'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
 login: String,
 email: String,
 password: String 
});
var ProductSchema = new Schema({    
    id_product: Number,
    ammount: Number,
    prize: Number
});

const UserChar = mongoose.model('User', UserSchema);
const ProductChar = mongoose.model('Product', ProductSchema);
module.exports = UserChar;
module.export = ProductChar;

