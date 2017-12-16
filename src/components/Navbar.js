import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Navbar = () => {
  return(
    <div>
      <Link to="/writereview">
        <Button basic>Write a Review</Button>
      </Link>
      <Link to="/login">
        <Button basic>Login</Button>
      </Link>
      <Link to="/signup">
        <Button basic>Signup</Button>
      </Link>
    </div>
  )
}

export default Navbar
