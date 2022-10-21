const { Schema, model } = require('mongoose')

const Review = new Schema (
  {
    name: {type: String, required: true},
    reviewText: {type: String, required: true},
    rating: { type: Number, required: true},
    listingId: {type: Schema.Types.ObjectId, ref:'listing_id'},
  },
  {timestamps: true}
)

module.exports = model('Review', Review)