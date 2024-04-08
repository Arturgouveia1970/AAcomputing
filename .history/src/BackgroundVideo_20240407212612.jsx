import React from 'react';

const BackgroundVideo = () => {
  return (
    <video className="absolute z-10 w-auto min-w-full min-h-full max-w-none" autoPlay loop muted>
      <source src="/src/assets/background-video.mov" type="video/movBackground" />
    </video>
  );
};

export default BackgroundVideo;