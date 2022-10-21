const { Router } = require('express');
const listingController = require('../controllers/ListingController')
const reviewController = require('../controllers/ReviewController')
const router = Router();

router.get('/', (req, res) => res.send('This is a route'))

router.post('/listings', listingController.createListing)
router.get('/listings', listingController.getAllListings)

router.get('/listings/:id', listingController.getListingById)

router.get('/reviews/listing/:listingId', reviewController.getReviewByListing)

router.post('/reviews', reviewController.createReview)


module.exports = router;



// all axios calls need to begin with '/api'