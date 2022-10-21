const { Schema } = require('mongoose')

const Listing = new Schema(
  {
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, required: true},
    website: {type: String, required: true},
    image: {type: String, required: true}
  }
)
module.exports = mongoose.model('Listing', Listing)