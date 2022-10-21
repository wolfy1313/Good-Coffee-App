const { findByIdAndUpdate } = require('../models/listing');
const Listing = require('../models/listing')

const createListing = async (req, res) => {
  try {
    const listing = await new Listing(req.body)
    await listing.save()
    return res.status(201).json({
      listing,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message})
  }
}

const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
    return res.status(201).json(listings)
  } catch (error) {
    return res.status(500).json({ error: error.message})
  }
  }

const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
    return res.status(201).json(listing)
  } catch (error) {
    return res.status(500).json({ error: error.message})
}
}

const deleteListing = async (req, res) => {
 try {
  const { id } = req.params
  const deleted = await Listing.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).json("Listing has been deleted")
    }
    throw new Error("Listing not found")
  } catch(error) {
    return res.status(500).json({ error: error.message})
  }
}

const updateListing = async (req, res) => {
  try {
    const listing = await findByIdAndUpdate(req.params.id, req.body, { new: true})
    res.status(200).json(listing)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = {
  createListing,
  getAllListings,
  getListingById,
  deleteListing,
  updateListing
}