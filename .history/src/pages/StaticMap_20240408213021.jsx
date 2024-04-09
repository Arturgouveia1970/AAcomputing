// import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import propTypes from './propTypes';

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

SStaticMap.propTypes = {
  lat: propTypes.number.isRequired,
  lng: propTypes.number.isRequired,
  zoom: propTypes.number.isRequired,
};

export default StaticMap;