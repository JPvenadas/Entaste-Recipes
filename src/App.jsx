import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"

const App = () => {
  return (
    <div>
     <Navbar/>
     <BrowserRouter>
     <Routes>
       <Route path="/" index element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

