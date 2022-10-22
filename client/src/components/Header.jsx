import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="">Home</Link>
      <Link to="review-form">Review Form</Link>
      <Link to="coffee-shops">Coffee Shops</Link>

    </div>
  )
}

export default Header