// import React from 'react';
// import video from '../assets/video10.mp4';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="https://youtu.be/tVH7FU8So9M?list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
