// src/StaticMap.js
// import React from 'react';

// eslint-disable-next-line react/prop-types
const StaticMap = ({ lat, lng, zoom, size, mapType }) => {
  const apiKey = import.meta.env.GOOGLE_MAP_API_KEY;
  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}x${size}&maptype=${mapType}&key=${apiKey}`;

  return <img src={imageUrl} alt="Static Map" />;
};

export default StaticMap;