import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';


const apiKey ='AIzaSyBEUaXPNCH0IhZwKbde1v-CpeKvNyM9w0E';

// dotenv.config();
// console.log('Google Maps API key:', import.meta.env.GOOGLE_MAP_API_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
