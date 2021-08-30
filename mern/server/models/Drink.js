const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt');

const drinkSchema = new Schema({
  drinkCity: {
    type: String,
    required: 'You need to leave a City!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  
  drinkLiquor:{
    type: String,
    trim: true,
  },
  
});

// const Drink = model('Drink', drinkSchema);

module.exports = drinkSchema;
