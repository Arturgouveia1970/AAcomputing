import ReactPlayer from 'react-player';

const BackgroundVideo = () => {
  return (
    <ReactPlayer
      className="react-player"
      url="/src/assets.mov"
      playing
      loop
      muted
      width="100%"
      height="100%"
      style={{ position: 'fixed', top: 0, left: 0 }}
    />
  );
};

export default BackgroundVideo;