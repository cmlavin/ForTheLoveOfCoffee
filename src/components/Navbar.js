import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Navbar = () => {
  return(
    <div className="navbar-container">
      <div className="leftside-navbar">
        <Link to="/writereview">
          <Button basic>Write a Review</Button>
        </Link>
      </div>
      <div className="rightside-navbar">
        <Link to="/login">
          <Button basic>Login</Button>
        </Link>
        <Link to="/signup">
          <Button basic>Signup</Button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
