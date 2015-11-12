'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
  name: String,
  phone: Number,
  email: String
});



module.exports = mongoose.model('Contact', contactSchema); 