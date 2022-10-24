import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm'


const ShopCard = (props) => {

const [selectedShop, setSelectedShop] = useState({})
const [shopReviews, setShopReviews] = useState([])


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
  }, [])
  return (
<> 
    <div className='shopCard'>
      <h3>{selectedShop?.name}</h3>
      <p>rating: {selectedShop?.rating}</p>
      <p>website: {selectedShop?.website}</p>
      <p>address: {selectedShop?.address}</p>
      <img src={selectedShop?.image}></img>
  </div>
    {shopReviews?.map(review => (
      <h3>{review.name + " - " + review.reviewText + " - " + review.rating}</h3>
    ))} 
<ReviewForm />
</>


  )
}

export default ShopCard

// do a map of reviews, display data for shop like in CoffeeShops
// render ReviewForm on this page