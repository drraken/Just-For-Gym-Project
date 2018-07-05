'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
 login: String,
 email: String,
 password: String 
});

var ProductSchema = new Schema({
    product: String,
    quantity: Number
});

var BuyerSchema = new Schema({  
    item: [],
    name: String,
    lastname: String,
    email: String,
    country: String,
    city: String,
    street: String
});

let UserChar = mongoose.model('User', UserSchema);
module.exports = UserChar;

let ProductChar = mongoose.model('Product', ProductSchema);
module.exports = ProductChar;

let BuyerChar = mongoose.model('Buyer', BuyerSchema);
module.exports = BuyerChar;

