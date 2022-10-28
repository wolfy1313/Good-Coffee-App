import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
  <div className='header'>
     <div> <Link to=""><h3 className='headerLink'>Home</h3></Link>
      <Link to="coffee-shops"><h3 className='headerLink'>Coffee Shops</h3></Link>
      </div>
    <div className='headerImage'> <img src='https://github.com/wolfy1313/MERN-APP/blob/main/client/src/assets/Good%20Coffee%20Austin%20NEW.png?raw=true'/>
    </div>
  </div>
  )
}

export default Header