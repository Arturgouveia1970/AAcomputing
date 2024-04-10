/* eslint-disable react/prop-types */
// import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const StaticMap = ({ lat, lng, zoom }) => {
  return (
    <div></div>
    <LoadScript
      googleMapsApiKey="AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E"
    >
      <GoogleMap
        mapContainerStyle={{
          height: '500px',
          width: '100%'
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

export default StaticMap;
