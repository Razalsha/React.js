


import React, { useState } from 'react';  // Ensure useState is imported
import { Link, useNavigate } from 'react-router-dom';  // Ensure useNavigate is imported for navigation
import { auth } from '../config/firebase';  // Firebase config import
import { signOut } from 'firebase/auth';  // Firebase sign-out method import
import './Navbar.css';  // Navbar CSS import

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);  // Track the menu state
  const navigate = useNavigate();  // For handling navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);  // Perform Firebase sign out
      navigate('/login');  // Redirect to login page after sign out
    } catch (error) {
      console.error('Error during logout:', error);  // Catch any sign out errors
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">My-Project</div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/post" onClick={toggleMenu}>Post</Link>
        </li>

        {user ? (
          <>
            <li>
              <div className="user-info">
                <img src={user.photoURL} alt={user.displayName} className="user-image" />
                <span>{user.displayName}</span>
              </div>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" onClick={toggleMenu}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
