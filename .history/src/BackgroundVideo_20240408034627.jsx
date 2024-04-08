import React from 'react';
import video from '../assets/backvideo.mp4';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay" />
    </div>
  );
};

export default BackgroundVideo;
