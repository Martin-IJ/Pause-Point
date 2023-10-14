import './styles/App.css'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';

function App() {

  return (
    <div>
        <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
