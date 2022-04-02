import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div>
     <Navbar/>
     <BrowserRouter>
     <Routes>
       <Route path="/" index element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  )
}

export default App

