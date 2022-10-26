import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'


const ShopCard = (props) => {
const BASE_URL= process.env.REACT_APP_BASE_URL

const initialState = { name: "", reviewText: "", rating: ""}
const [selectedShop, setSelectedShop] = useState({})
const [shopReviews, setShopReviews] = useState([])
const [reviewSubmitted, toggleReviewSubmitted] = useState(false)
const [formState, setFormState] = useState(initialState);

const handleChange = (e) => {
  setFormState({ ...formState, [e.target.id]: e.target.value});
};

const { id } = useParams()

  useEffect(() => {

    const getShopById = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/api/listings/${id}`)
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
        let res = await axios.get(`http://localhost:3001/api/reviews/listing/${id}`)
        setShopReviews(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getReviewsByShopId()
  }, [reviewSubmitted])

  const deleteReview = async (reviewId) => {
    try {
    await axios.delete(`${BASE_URL}/reviews/${reviewId}`)
  } catch(err) {
    console.log(err)
  }
    toggleReviewSubmitted(!reviewSubmitted)
  }

  // const updateReview = async (reviewId) => {
  //   console.log(reviewId)
  //   try {
  //     // await axios.put(`${BASE_URL}/reviews/${reviewId}`, {})
  //   } catch (err){
  //     console.log(err)
  //   }
  // }


  // update is a combo of getbyId and post.  ** use put instead of post. getbyId and then put. spread review and then add formState. 
  return (
<> 
  <div className='shopCard'>
      <h3>{selectedShop?.name}</h3>
      <p>rating: {selectedShop?.rating}</p>
      <p>website: {selectedShop?.website}</p>
      <p>address: {selectedShop?.address}</p>
      <img src={selectedShop?.image}></img>
  </div>
  <div className='shopReviewsContainer'>
    <ReviewForm reviewSubmitted={reviewSubmitted} toggleReviewSubmitted={toggleReviewSubmitted} handleChange={handleChange} formState={formState} setFormState={setFormState} initialState={initialState}/>
    {shopReviews?.map(review => (
      <div key={review._id}><h3>Reviewer: {review.name}</h3><p>Review: {review.reviewText}</p><h4>Rating: {review.rating}</h4> 
      <Link to={`/edit-review/${review._id}`}> <button>Update</button></Link>
      <button onClick={() => {deleteReview(review._id)}}>Delete</button>
      </div>
    ))}
  </div>
  <div className='reviewFormContainer'>
  </div>
</>


  )
}

export default ShopCard


// render ReviewForm on this page