import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"; 
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Footer from './components/Footer';
import './AnimatedBackground.css';
import Particles from "react-tsparticles";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { useCallback, useEffect } from "react";
import MovToMp4 from 'react-native-mov-to-mp4';


const filename = Date.now().toString();
MovToMp4.convertMovToMp4(videoFilePath, filename + ".mp4")
  .then(function(results) {
    // here you can upload the video...
    console.log(results);
  });


function App() { 

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add('animated-background');

    return () => {
      body.classList.remove('animated-background');
    };
  }, []);
  
  const options = {
    preset: "confetti",
  };

  const particlesInit = useCallback(async (engine) => {
    await loadConfettiPreset(engine);
  }, []);

  return (
    <Router>
      <Particles options={options} init={particlesInit} />
      <div style={{ backgroundImage: `url(/src/assets/back5.jpg)` }}>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer /> 
      </div>          
    </Router>
  )
}

export default App