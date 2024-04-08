// import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;