import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"; 
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';


function App() {  

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Casa />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/automovel" element={<Automovel />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer /> 
      </div>          
    </Router>
  )
}

export default App
