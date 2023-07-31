import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  // Aquí puedes agregar la lógica para obtener los productos destacados
  const featuredProducts = [
    { id: 1, name: 'Producto 1', price: 25, image: 'imagen1.jpg' },
    { id: 2, name: 'Producto 2', price: 30, image: 'imagen2.jpg' },
    { id: 3, name: 'Producto 3', price: 20, image: 'imagen3.jpg' },
  ];

  return (
    <div className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="product-list">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
