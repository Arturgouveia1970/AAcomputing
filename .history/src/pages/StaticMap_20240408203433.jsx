// import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const StaticMap = ({ lat, lng, zoom }) => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E"
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

StaticMap.propTypes = 
};

export default StaticMap;