import React from 'react'
import { Input } from 'semantic-ui-react'
import VideoBackground from './VideoBackground'
import Navbar from './Navbar'
import Title from '../Title'
import Welcome from './Welcome'

const Homepage = () => {
  return(
    <div>
      <VideoBackground />
      <Navbar />
      <Title />
      <Welcome />
      <Input label='Find' placeholder='Cafe name' />
      <Input label='in' placeholder='City' />
    </div>
  )
}

export default Homepage
