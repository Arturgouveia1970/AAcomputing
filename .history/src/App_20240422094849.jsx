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
import Footer1 from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';

function App() { 
  return (
    <Router>
      <BackgroundVideo />
      <div className="relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer1 /> 
      </div>          
    </Router>
  )
}

export default App;