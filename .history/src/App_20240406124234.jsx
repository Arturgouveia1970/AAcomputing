import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"; 
import Header from './'

function App() {  

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/casa" element={<Casa />} />
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