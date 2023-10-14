import Home from './pages/Home'
import Navbar from './pages/Navbar'
import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';

function App() {

  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
