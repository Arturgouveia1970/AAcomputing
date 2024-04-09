import React from 'react'
import ReactDOM from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
//import { Map, GoogleApiWrapper } from 'google-maps-react';
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
