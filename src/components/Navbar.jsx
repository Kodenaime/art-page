import React, { useState } from 'react'

import logo from '../assets/logo.png'
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";


const Navbar = () => {

  const [navshowing, setNavShowing] = useState(window.innerWidth > 820 ? true : false);

  const closeNavBar = () => {
    if(window.innerWidth < 820) {
      setNavShowing(false);
    } else {
      setNavShowing(true)
    }
  }

  return (
    <nav>
        <div className="nav-container">
            <a className="logo" onClick={closeNavBar} ><img src={logo} alt="website logo" /></a>
            {
              navshowing &&
                <ul className="nav-menu">
                  <li><a href="" onClick={closeNavBar} >Exhibits</a></li>
                  <li><a href="" onClick={closeNavBar} >Events</a></li>
                  <li><a href="" onClick={closeNavBar} >Visit</a></li>
                  <li><a href="" onClick={closeNavBar} >Menbership</a></li>
                </ul>
            }
            <div className="nav-icons">
                <IoIosSearch />
                <IoCartOutline />
            </div>
            <button className="toggle-btn" onClick={() => setNavShowing(!navshowing)}>
                {navshowing ? <FaWindowClose /> : <FaBarsProgress />}
            </button>
        </div>
    </nav>
  )
}

export default Navbar