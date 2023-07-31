import React from 'react';
import "./ContactFAQ.css";

const ContactFAQ = () => {
  return (
    <div className="mx-auto m-5" style={{ width: "50%" }}>
      <h4>Preguntas Frecuentes</h4>
      {/* Lista de preguntas frecuentes */}
      <ul>
        <li>
          <strong>1. ¿Cuál es el horario de atención?</strong>
          <p>Nuestro horario de atención es de lunes a viernes de 9:00 AM a 6:00 PM.</p>
        </li>
        <li>
          <strong>2. ¿Cuánto tiempo tarda en llegar mi pedido?</strong>
          <p>El tiempo de entrega depende de la ubicación y el método de envío seleccionado. Por lo general, los pedidos son entregados en un plazo de 2 a 5 días hábiles.</p>
        </li>
        {/* Agrega más preguntas frecuentes y sus respuestas si es necesario */}
      </ul>
    </div>
  );
};

export default ContactFAQ;
