import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../globals'



const CoffeeShops = (props) => {

const [shops, setShops] = useState([])
const [reviews, setShopReviews] = useState([])



useEffect(() => {
  const getCoffeeShops = async () => {
    try {
      let res = await axios.get(`${BASE_URL}listings`)
      setShops(res.data)
    } catch(err) {
      console.log(err)
    }
  }
  getCoffeeShops()
}, [])

useEffect(() => {
  const getShopReviews = async () => {
    try {
      let res = await axios.get(`${BASE_URL}reviews`)
      setShopReviews(res.data)
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
    <div key= {_id} className='shopCard' style={{fontSize: "18px"}}>
      <h1>{name}</h1>
      <p>rating: {rating}</p>
      <p> website: <a href={website} target="_blank"> {website}</a></p>
      <p>address: {address}</p>
      <p>reviews: {reviews}</p>
     <div className='coffeeShopsImg'><Link to={`/coffee-shops/${_id}`}><img style= {{width: "20vw", height: "20vh", objectFit: "cover"}}onClick={() => props.setSelectedShop(_id)}src={image}/></Link></div>
    </div>
    )}</div>
  )
}

export default CoffeeShops