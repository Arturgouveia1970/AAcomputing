// import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const StaticMap = ({ lat, lng, zoom, size, mapType, apiKey }) => {
  return (
    <LoadScript
      googleMapsApiKey=
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
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

StaticMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  mapType: PropTypes.oneOf(['roadmap', 'satellite', 'hybrid', 'terrain']).isRequired,
  apiKey: PropTypes.string.isRequired
};

export default StaticMap;