const mongoose = require('mongoose')

const Listing = new mongoose.Schema(
  {
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, required: true},
    website: {type: String, required: true},
    reviewId: {type: mongoose.Schema.Types.ObjectId, ref: 'review_Id'},
    image: {type: String, required: true}
  }
)
module.exports = mongoose.model('Listing', Listing)

// 'review_Id' will be the populate method