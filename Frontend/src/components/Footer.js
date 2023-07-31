import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Nuestra Tienda</h3>
          <p>Dirección: Calle Principal, Ciudad</p>
          <p>Teléfono: (123) 456-7890</p>
          {/* Agrega cualquier otra información relevante */}
        </div>
        <div className="footer-section">
          <h3>Categorías</h3>
          <ul>
            <li>Electrónicos</li>
            <li>Ropa</li>
            <li>Hogar y Jardín</li>
            {/* Agrega otras categorías */}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Quienes Somos</li>
            <li>Contacto</li>
            {/* Agrega otros enlaces relevantes */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tu E-Commerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
