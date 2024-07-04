import { BrowserRouter, Routes, Route } from "react-router-dom"
import home from "./components/home"

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<home></home>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
