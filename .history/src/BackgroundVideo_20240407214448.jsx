
import { Video } from 'react-native';

const BackgroundVideo = () => {
  const videoSource = '/src/assets/ba.mp4';

  return (
    <Video
      source={{ uri: videoSource }}
      style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
      resizeMode="cover"
      repeat={true}
    />
  );
};

export default BackgroundVideo;