import React, { useState } from 'react';
import { Link, NavLink,Outlet,useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navi=useNavigate()
function fun(){
  setIsOpen(!isOpen)
  
  navi('/Course')
}
  return (
    <div>
      <h1 className="font-heading">ROCKY MANNA</h1>
      <ul className="navbar">
        <li><NavLink className="navbarlink" to="/">Home</NavLink></li>
        <li><NavLink className="navbarlink" to="/About">About</NavLink></li>
       

        {/* Courses Dropdown */}
        <li className="dropdown">
          <button className="dropbtn" onClick={() => {fun()}}>
            Courses ▼
          </button>
          {isOpen && (
            <ul className="dropdown-content">
              <li><Link to="course1">Course 1</Link></li>
              <li><NavLink to="/course2">Course 2</NavLink></li>
              <li><NavLink to="/course3">Course 3</NavLink></li>
            </ul>
            
          )}
          
          
        </li>
      
        <li><NavLink className="navbarlink" to="/User">User Details</NavLink></li>
      </ul>
    </div>
  );
};

export default Navigation;
