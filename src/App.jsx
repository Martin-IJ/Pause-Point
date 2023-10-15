import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import './styles/App.css'
import Download from './pages/Download'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
