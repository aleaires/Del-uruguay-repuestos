import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { Carousel } from 'react-bootstrap'; // Importa el componente de carrusel de Bootstrap

const CarouselComponent = () => {
  return (
    <Carousel style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/renault.svg"
          alt="Imagen 1"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Chevrolet-logo.png"
          alt="Imagen 2"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Agrega más items al carrusel si es necesario */}
    </Carousel>
  );
};

export default CarouselComponent;
