import React from 'react';
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <div className="mx-auto m-5" style={{ width: "50%" }}>
      <h4>Ubicación</h4>
      {/* Dirección en texto */}
      <p style={{ marginTop: '10px', textAlign: 'center' }}>Calle 2020, Montevideo, Uruguay</p>
    </div>
  );
};

export default ContactMap;
