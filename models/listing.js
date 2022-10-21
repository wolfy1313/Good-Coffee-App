const mongoose = require('mongoose')

const Listing = new mongoose.Schema(
  {
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, required: true},
    website: {type: String, required: true},
    image: {type: String, required: true}
  }
)
module.exports = mongoose.model('Listing', Listing)