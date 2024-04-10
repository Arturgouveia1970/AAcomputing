/* eslint-disable react/prop-types */
import {} from 'react';
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
  const [currentLocation, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
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
