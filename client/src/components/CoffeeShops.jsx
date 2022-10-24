import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const CoffeeShops = (props) => {

const [shops, setShops] = useState([])
const [reviews, setShopReviews] = useState([])



useEffect(() => {
  const getCoffeeShops = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/listings')
      setShops(res.data)
      console.log(shops)
    } catch(err) {
      console.log(err)
    }
  }
  getCoffeeShops()
}, [])

useEffect(() => {
  const getShopReviews = async () => {
    try {
      let res = await axios.get('http://localhost:3001/api/reviews')
      setShopReviews(res.data)
      console.log(reviews)
    } catch(err) {
      console.log(err)
    }
  }
  getShopReviews()
}, [])

  return (
    <div className='shopsContainer'>
      {shops.map(
      ({name, address, rating, website, reviews, image, _id}) => 
    <div className='shopCard'>
      <h3>{name}</h3>
      <p>rating: {rating}</p>
      <p>website: {website}</p>
      <p>address: {address}</p>
      <p>reviews: {reviews}</p>
     <Link to={`/coffee-shops/${_id}`}><img onClick={() => props.setSelectedShop(_id)}src={image}/></Link>
    </div>
    )}</div>
  )
}

export default CoffeeShops