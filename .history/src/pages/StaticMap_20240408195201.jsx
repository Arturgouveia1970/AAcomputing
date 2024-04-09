// import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const StaticMap = () => {
  const lat = -8.830679;
  const lng = 13.228166;
  const zoom = 12;
  const size = 600;
  const mapType a= 'roadmap';
  const apiKey = 'AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E';

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
            mapType
          }
        }}
      >
        {/* Add markers, layers, and other features here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default StaticMap;