'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categories = mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},

});

// Do we need to run any lifecycle hooks/middleware?
// categories.post('save', function(record){
//   record.text =record.text.toUpperCase();
// });

const model = mongoose.model('categories', categories);

module.exports = model;