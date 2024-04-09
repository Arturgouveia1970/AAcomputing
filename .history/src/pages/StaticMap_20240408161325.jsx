// import React from 'react';
// import PropTypes from 'prop-types';

const StaticMap = () => {
  const lat = -8.830679 ;
  const lng = 
  const zoom = 
  const size = 
  const mapType = 
  const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}x${size}&maptype=${mapType}&key=${apiKey}`;

  return <img src={imageUrl} alt="Static Map" />;
};

StaticMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  mapType: PropTypes.oneOf(['roadmap', 'satellite', 'hybrid', 'terrain']).isRequired
};

export default StaticMap;