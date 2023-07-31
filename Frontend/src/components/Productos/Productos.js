import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProductCard from './ProductCard';
import ProductCarousel from './ProductCarousel';
import ProductCheckout from './ProductCheckout';
import ProductDetail from './ProductDetail';
import ProductFilter from './ProductFilter';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';
import ProductSearch from './ProductSearch';
import ProductSort from './ProductSort';

const Productos = () => (
    <div>
      <Header />
      <ProductSearch />
      <ProductList />
      <ProductPagination />
      {/* Contenido de la página de productos */}
      <Footer />
    </div>
  );

export default Productos;