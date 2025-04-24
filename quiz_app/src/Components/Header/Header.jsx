import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
          <h1>Students Quiz App</h1>
          <p>Welcome to the Students Quiz App! Click below to start your journey.</p>
          <Link to="/main-menu">
            <button>Let's Go</button> 
            </Link>
    </div>
  )
}

export default Header