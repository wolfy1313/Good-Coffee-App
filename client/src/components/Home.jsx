import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='notHome'>
      <Link to={'/coffee-shops'}><img src='https://github.com/wolfy1313/MERN-APP/blob/main/client/src/assets/coffee%20home%20logo.png?raw=true'/> </Link>
    </div>
  )
}

export default Home