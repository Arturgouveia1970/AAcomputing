import ffmpeg from 'fluent-ffmpeg';

const convertMovToMp4 = (movFilePath, mp4FilePath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(movFilePath)
      .format('mp4')
      .on('end', () => {
        console.log('Conversion completed');
        resolve();
      })
      .on('error', (err) => {
        console.error('Error converting file:', err);
        reject(err);
      })
      .save(mp4FilePath);
  });
};

export default convertMovToMp4;