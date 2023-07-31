import React from 'react';
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="mx-auto m-5" style={{ width: "50%" }}>
      <h4>Información de Contacto</h4>
      <p>Correo Electrónico: info@example.com</p>
      <p>Teléfono: +1 234 567 890</p>
      <p>Dirección: Calle Principal, Ciudad, País</p>
    </div>
  );
};

export default ContactInfo;
