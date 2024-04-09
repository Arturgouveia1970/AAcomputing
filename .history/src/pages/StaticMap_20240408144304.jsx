// src/StaticMap.js
// import React from 'react';

const StaticMap = ({ -8.830717, lng, zoom, size, mapType }) => {
  const apiKey = 'AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E';
  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}x${size}&maptype=${mapType}&key=${apiKey}`;

  return <img src={imageUrl} alt="Static Map" />;
};

export default StaticMap;