import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1>Bienvenido a nuestra tienda en línea</h1>
      <p>Descubre nuestras ofertas exclusivas</p>
      <Link to="/Productos">
        <button>Ver Productos</button>
      </Link>
      
    </div>
  );
};

export default Hero;
