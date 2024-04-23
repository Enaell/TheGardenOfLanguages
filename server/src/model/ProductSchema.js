const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null
  },
  price: {
    type: Number,
    default: 10
  }
});

module.exports = mongoose.model('Product', productSchema);
