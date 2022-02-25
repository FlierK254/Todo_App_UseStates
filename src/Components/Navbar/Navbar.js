import React from 'react';
import { Link } from 'react-router-dom';
import Activities from './Edit';
import Completed from './completed';
import Tasks from './Tasks';
import NavbarStyle from './Navbar.css';

 function Navbar() {
  return <div className='NavC'>
      

    
        <Link to="/">Home</Link>
    
    
        <Link to="/Activities">Activities</Link>
    
    
        <Link to ="/Tasks">Tasks</Link>
    
        <Link to="/Completed">Completed</Link>
    

  </div>
}
export default Navbar;