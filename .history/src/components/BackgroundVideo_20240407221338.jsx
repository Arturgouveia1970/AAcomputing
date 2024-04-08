import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <ReactPlayer
        url="/src/assets/backvideo.mov"
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="object-cover"
      />
    </div>
  );
};

export default BackgroundVideo;
