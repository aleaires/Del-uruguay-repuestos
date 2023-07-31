import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import CarouselComponent from './components/Carousel';
import TestimonialCarousel from './components/TestimonialCarousel';
import Contactenos from './components/Contactenos/Contactenos';
import Productos from './components/Productos/Productos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <Header />
    {/* Contenido de la página Home */}
    <Hero />
    <CarouselComponent />
    <FeaturedProducts />
    <TestimonialCarousel />
    <Footer />
  </div>
);

const Nosotros = () => (
  <div>
    <Header />
    {/* Contenido de la página Quienes somos */}
    <Footer />
  </div>
);

const Politicas = () => (
  <div>
    <Header />
    {/* Contenido de la página Quienes somos */}
    <Footer />
  </div>
);



// Resto de las vistas...

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Politicas" element={<Politicas />} />
          <Route path="/Contactenos" element={<Contactenos />} />
          {/* Resto de las rutas */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
