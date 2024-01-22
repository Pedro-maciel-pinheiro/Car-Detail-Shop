import React from 'react';
import videoBg from './video/lc500.mp4'


const VideoPlayer = () => {
  return (
    <div className='topBg'>
      <div className='overlay'>
      <video className='videobg' src={videoBg} autoPlay loop muted ></video>
      </div>

    </div>
  );
};

export default VideoPlayer;





