import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import { BASE_URL } from '../globals'

const ShopCard = () => {

const initialState = { name: "", reviewText: "", rating: ""}
const [selectedShop, setSelectedShop] = useState({})
const [shopReviews, setShopReviews] = useState(null)
const [reviewSubmitted, toggleReviewSubmitted] = useState(false)
const [formState, setFormState] = useState(initialState);

const handleChange = (e) => {
  setFormState({ ...formState, [e.target.id]: e.target.value});
};

const { id } = useParams()

  useEffect(() => {

    const getShopById = async () => {
      try {
        let res = await axios.get(`${BASE_URL}listings/${id}`)
        setSelectedShop(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getShopById()
  }, [])

  useEffect(() => {

    const getReviewsByShopId = async () => {
      try {
        let res = await axios.get(`${BASE_URL}reviews/listing/${id}`)
        setShopReviews(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getReviewsByShopId()
  }, [reviewSubmitted])

  const deleteReview = async (reviewId) => {
    try {
    await axios.delete(`${BASE_URL}reviews/${reviewId}`)
  } catch(err) {
    console.log(err)
  }
    toggleReviewSubmitted(!reviewSubmitted)
  }

  return (
<> 
  <div className='shopCard'>
      <h1>{selectedShop?.name}</h1>
      <p>rating: {selectedShop?.rating}</p>
      <p>website: <a href={selectedShop?.website}target="_blank">{selectedShop?.website}</a></p> 
      {/* <p> website: <a href={website} target="_blank"> {website}</a></p> */}
      <p>address: {selectedShop?.address}</p>
      <img className="imageOnShopCardPage" src={selectedShop?.image}></img>
      {/* style={{width:"40vw", height: "50vh"}} */}
  </div>
  <div className='shopReviewsContainer'>
    <ReviewForm reviewSubmitted={reviewSubmitted} toggleReviewSubmitted={toggleReviewSubmitted} handleChange={handleChange} formState={formState} setFormState={setFormState} initialState={initialState}/>
    {shopReviews && (shopReviews.map(review => (
      <div className="existingReviews" key={review._id}><h2>Reviewer: {review.name}</h2><p>Review: {review.reviewText}</p><h4>Rating: {review.rating}</h4> 
      <Link to={`/edit-review/${review._id}`}> <button>Update</button></Link>
      <button onClick={() => {deleteReview(review._id)}}>Delete</button>
      </div>
    )))}
  </div>
  <div className='reviewFormContainer'>
  </div>
</>


  )
}

export default ShopCard


// render ReviewForm on this pag