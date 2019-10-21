'use strict';

const mongoose = require('mongoose');

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,

});

// Do some work

// Disconnect
// mongoose.disconnect();

const Categories = require('./models-singular/categories-schema.js');


const handleCreate = () => {
  const newCategory = new Categories ({text: 'my new message'});
  newCategory.save()
    .then(category => console.log(category))
    .catch(err => console.log('woops', err));
};

const handleFetch = () => {
  Categories.find({})
    .then(allCategories => console.log(allCategories))
    .catch(err => console.error(err));
};

// handleCreate();
handleFetch();