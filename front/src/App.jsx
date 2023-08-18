import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './../pages/añadirPelicula';
import AñadirFuncion from './../pages/añadirFuncion'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/añadirFuncion" element={<AñadirFuncion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
