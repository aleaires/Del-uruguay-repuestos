import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TestimonialCarousel.css'; // Importa los estilos personalizados
import { Carousel } from 'react-bootstrap';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'Juan Pérez',
      comment: '¡Excelente servicio y productos de alta calidad! Muy satisfecho con mi compra.',
      image: 'cliente1.jpg', // Agrega la URL de la imagen del cliente
    },
    {
      name: 'María Gómez',
      comment: 'Increíble atención al cliente y entrega rápida. Volveré a comprar sin duda.',
      image: 'cliente2.jpg', // Agrega la URL de la imagen del cliente
    },
    // Agrega más comentarios si es necesario
  ];

  return (
    <Carousel interval={5000}>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} className="customer-img" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.comment}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
