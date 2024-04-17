// import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
// import { useState, useEffect } from 'react';

// const containerStyle = {
//   height: '500px',
//   width: '100%',
// };

// const StaticMap = ({ zoom }) => {
//   const [currentLocation, setCurrentLocation] = useState(null);

//   useEffect(() => {
//     const getCurrentLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setCurrentLocation({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => {
//             console.log('Error getting user location');
//           }
//         );
//       } else {
//         console.log('Geolocation is not supported by this browser.');
//       }
//     };

//     getCurrentLocation();
//   }, []);

//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E"
//       loadingElement={<div style={{ height: '100%' }}>Loading...</div>}
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={currentLocation || { lat: -8.830679, lng: 13.228166 }}
//         zoom={zoom}
//       >
//         {currentLocation && <Marker position={currentLocation} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default StaticMap;

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import  React, {useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const StaticMap = ({ lat, lng, zoom }) => {
//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E"
//     >
//       <GoogleMap
//         mapContainerStyle={{
//           height: '500px',
//           width: '100%'
//         }}
//         options={{
//           zoom,
//           center: {
//             lat,
//             lng
//           }
//         }}
//       >
//         <Marker position={{ lat: -8.830679, lng: 13.228166 }} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default StaticMap;

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const StaticMap = ({ zoom }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => {
            console.log('Error getting user location');
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E"
    >
      <GoogleMap
        className="opacity-100"
        mapContainerStyle={{
          height: '500px',
          width: '100%'
        }}
        options={{
          zoom,
          center: currentLocation || { lat: -8.830679, lng: 13.228166 }
        }}
      >
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default StaticMap;
