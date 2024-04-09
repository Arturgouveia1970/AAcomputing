import Hero from "../components/Hero"
import About from "./About"
import StaticMap from "./StaticMap";
import Portfolio from "./Portfolio"
import Services from "./Services";

function Home() {
  const lat = -8.830679;
  const lng = 13.228166;
  const zoom = 12;
  const size = 600;
  const mapType ='roadmap';
  const apiKey = import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import { Map, GoogleApiWrapper } from 'google-maps-react';
import App from './App.jsx';
import './index.css';
// import dotenv from 'dotenv';
import 'tailwindcss/tailwind.css';

const apiKey ='AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E';

// dotenv.config();
// console.log('Google Maps API key:', import.meta.env.GOOGLE_MAP_API_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
;

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />     
      <StaticMap 
        lat={lat} 
        lng={lng} 
        zoom={zoom} 
        size={size} 
        mapType={mapType}
        apiKey={apiKey} 
      />
      
    </>
  )
}

export default Home