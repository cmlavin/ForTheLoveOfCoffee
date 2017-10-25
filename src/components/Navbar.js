import React from 'react'
import { Button } from 'semantic-ui-react'

const Navbar = () => {
  return(
    <div>
      <Button className="button-navbar" basic>Write a Review</Button>
      <Button className="button-navbar" basic>Login</Button>
      <Button className="button-navbar" basic>Signup</Button>
    </div>
  )
}

export default Navbar
