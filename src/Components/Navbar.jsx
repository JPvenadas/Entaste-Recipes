import { useState } from "react";
import {FiGrid} from "react-icons/fi";
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
                  <Navlinks translate={`${navstatus? 'translateX(0)': 'translateX(200%)'}`}>
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
                  <FiGrid className="ham-menu" onClick={()=>{changenavstat(!navstatus)}}/>
            </div>
       </div>
   </nav>
  )
}

export default Navbar
