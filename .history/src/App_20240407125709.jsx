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



function App() { 
  
  const options = {
    preset: "confetti",
  };

  const particlesInit = useCallback(async (engine) => {
    await loadConfettiPreset(engine);
  }, []);

  return (
    <Router>
      <Particles options={options} init={particlesInit} />
      <div style={{ backgroundImage: `url(/src/assets/back6.jpg)`undImage: ``}}>

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