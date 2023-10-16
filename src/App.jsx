import Home from './pages/Home'
import Navbar from './compments/Navbar'
import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Download from './compments/Download'
import Footer from './compments/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {

  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
