import React from 'react'
import VideoBackground from './VideoBackground'
import Navbar from './Navbar'
import Title from '../Title'
import Welcome from './Welcome'
import Search from './Search'

const Homepage = () => {
  return(
    <div>
      <VideoBackground />
      <Navbar />
      <div id="homepage-title">
        <Title />
      </div>
      <Welcome />
      <Search />
    </div>
  )
}

export default Homepage
