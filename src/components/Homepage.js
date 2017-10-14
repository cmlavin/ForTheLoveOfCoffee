import React from 'react'
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
    </div>
  )
}

export default Homepage
