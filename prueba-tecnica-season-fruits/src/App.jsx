import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './components/Inicio'


function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
