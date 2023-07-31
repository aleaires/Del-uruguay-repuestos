import React from 'react';
import "./ContactSocial.css";

const ContactSocial = () => {
  return (
    <div className="mx-auto m-5" style={{ width: "50%" }}>
      <h4>Redes Sociales</h4>
      <ul>
        <li><a href="https://www.facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://www.twitter.com/tu-pagina" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.instagram.com/tu-pagina" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        {/* Agrega más enlaces a otras redes sociales si es necesario */}
      </ul>
    </div>
  );
};

export default ContactSocial;
