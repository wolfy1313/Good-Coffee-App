const { findByIdAndUpdate } = require('../models/review')

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

const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
    return res.status(201).json(
      review
    )
  }catch(error) {
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

const getAllReviews = async (req, res) => {
  try {
    const review = await Review.find()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).json({ error: error.message})
  }
}

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Review.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Review deleted");
    }
    throw new Error("Review not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.status(201).json(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getReviewByListing,
  createReview,
  deleteReview,
  updateReview,
  getReviewById,
  getAllReviews
}