const { Router } = require('express');
const listingController = require('../controllers/ListingController')
const reviewController = require('../controllers/ReviewController');
const review = require('../models/review');
const router = Router();

router.get('/', (req, res) => res.send('This is a route'))

router.post('/listings', listingController.createListing)

router.get('/listings', listingController.getAllListings)

router.get('/listings/:id', listingController.getListingById)

router.put('/listings/:id', listingController.updateListing)

router.delete('/listings/:id', listingController.deleteListing)

// -------------- Listing Routes above, Review Routes below---------------------//

router.get('/reviews/listing/:listingId', reviewController.getReviewByListing)

router.post('/reviews', reviewController.createReview)

router.put('/reviews/:id', reviewController.updateReview)

router.delete('/reviews/:id', reviewController.deleteReview)

router.get('/reviews/:id', reviewController.getReviewById)

router.get('/reviews', reviewController.getAllReviews)

// need a get all and a getById


module.exports = router;



// all axios calls need to begin with '/api'