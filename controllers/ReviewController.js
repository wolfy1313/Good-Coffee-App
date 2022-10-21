const Review = require('../models/review')

const getReviewByListing = async (req, res) => {
  try {
    const review = await Review.find({listingId: req.params.listingId})
    return res.status(201).json(
      review
    )
  } catch(error) {
    return res.status(500).json({error: error.message})
  }
}

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body)

    return res.status(201).json({
      review,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message})
  }
}

module.exports = {
  getReviewByListing,
  createReview
}