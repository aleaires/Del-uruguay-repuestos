import React, { useState } from 'react';
import "./ContactInfo.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar el formulario de contacto
    console.log(formData);
    // Limpia el formulario después de enviarlo (opcional)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return  (
    <div className="mx-auto m-5" style={{ width: "50%" }}>
      <h4 className="m-5 text-center">Déjenos un comentario y nos pondremos en contacto con usted</h4>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Asunto</label>
          <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
