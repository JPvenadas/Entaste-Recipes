import { useState } from "react";
import {FaBars} from "react-icons/fa";
import { Navlinks } from "../Styles/Navbar";


const Navbar = () => {

const [navstatus, changenavstat] = useState(false)

  return (
   <nav>
       <div className="navbar-container">
           <div className="logo-container">
              <span className="logo">
                  <span>Entaste</span>Recipes
              </span>
            </div>
            <div className="navlinks-container">
                  <Navlinks translate={`${navstatus? 'translateX(200%)': 'translateX(0)'}`}>
                      <li>
                          <a href="">Home</a>
                      </li>
                      <li>
                          <a href="">Recipes</a>
                      </li>
                      <li>
                          <a href="">About</a>
                      </li>
                  </Navlinks>
                  <FaBars className="ham-menu" onClick={()=>{changenavstat(!navstatus)}}/>
            </div>
       </div>
   </nav>
  )
}

export default Navbar
