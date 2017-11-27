import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Navbar = () => {
  return(
    <div>
      <Button className="button-navbar" basic>Write a Review</Button>
      <Link to="/login">
        <Button className="button-navbar" basic>Login</Button>
      </Link>
      <Link to="/signup">
        <Button className="button-navbar" basic>Signup</Button>
      </Link>
    </div>
  )
}

export default Navbar
