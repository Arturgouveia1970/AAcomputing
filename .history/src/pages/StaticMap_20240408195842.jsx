// import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const StaticMap = ({ lat, lng, zoom, size, mapType, apiKey }) => {
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
            lng
          }
        }}
      >
        <Marker position
      </GoogleMap>
    </LoadScript>
  );
};

export default StaticMap;