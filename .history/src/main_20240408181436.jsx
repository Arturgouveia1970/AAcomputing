import React from 'react'
import ReactDOM from 'react-dom/client'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import App from './App.jsx'
import './index.css'
import dotenv from 'dotenv';

dotenv.config();
console.log('Google Maps API key:', process.env.GOOGLE_MAP_API_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)