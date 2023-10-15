import Home from './pages/Home'
import Navbar from './compments/Navbar'
import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Download from './compments/Download'
import Footer from './compments/Footer';

function App() {

  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
