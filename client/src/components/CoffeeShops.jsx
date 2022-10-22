import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



const CoffeeShops = () => {

const [shops, setShops] = useState([])



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

  return (
    <div className='shopsContainer'>
      {shops.map(
      ({name, address, rating, website, image, _id}) => 
    <div className='shopCard'>
      <h3>{name}</h3>
      <p>rating: {rating}</p>
      <p>website: {website}</p>
      <p>address: {address}</p>
      <img src={image}/>
    </div>
    )}</div>
  )
}

export default CoffeeShops