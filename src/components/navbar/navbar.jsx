import React from 'react';
import './navbar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src\components\assests\images\logo.png" alt="" />
        <span className="app-name">Electricity Billing System</span>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li className="nav-item">Dashboard</li>
          <li className="nav-item">Manage</li>
        </ul>
        <div className="auth-links">
          <span className="nav-item"><Link to ="Register" className='link'>Logout</Link></span>
          <span className="nav-item"><Link to ="Login" className='link'>Login</Link></span>
          <span className="nav-item">About Us</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
