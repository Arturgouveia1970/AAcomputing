// import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const StaticMap = () => {
  const lat = -8.830679;
  const lng = 13.228166;
  const zoom = 12;
  const size = 600;
  const mapType = 'roadmap';
  const apiKey = 'YOUR_API_KEY';

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={{
          height: '400px',
          width: '800px'
        }}
        options={{
          zoom,
          center: {
            lat,
            lng,
            size,
            map
          }
        }}
      >
        {/* Add markers, layers, and other features here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default StaticMap;