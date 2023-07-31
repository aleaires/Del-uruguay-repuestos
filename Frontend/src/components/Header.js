import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/Productos">Productos</Link>
        <Link to="/Nosotros">Quienes somos</Link>
        <Link to="/Politicas">Politicas</Link>
        <Link to="/Contactenos">Contactenos</Link>
      </div>
    </div>
  );
};

export default Header;
