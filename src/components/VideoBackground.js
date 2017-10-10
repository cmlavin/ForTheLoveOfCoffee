import React from 'react'
import VideoCover from 'react-video-cover'

class VideoBackground extends React.Component {
  state = {
    resizeNotifier: () => {}
  }

  render() {
    const style = {
      width: '100%',
      height: '100%',
      position: 'center',
      margin: 'auto',
      top: '-25vh',
      left: '-25vw',
      zIndex: -2
    }

    const videoOptions = {
      src: '/coffee.mp4',
      autoPlay: true,
      loop: true,
      muted: true
    }

    return(
      <div style={style}>
        <VideoCover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier
            })
          }}
        />
      </div>
    )
  }
}

export default VideoBackground
