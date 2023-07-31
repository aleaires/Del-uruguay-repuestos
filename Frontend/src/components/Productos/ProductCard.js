import React from 'react';

const ProductCard = ({ nombreProducto, categoriaProducto, modeloProducto, marcaProducto, precioProducto, descripcionProducto, disponibilidad }) => {
  return (
    <div className="card mb-4">
      <img src="product-image.jpg" className="card-img-top" alt={nombreProducto} />
      <div className="card-body">
        <h5 className="card-title">{nombreProducto}</h5>
        <p className="card-text">Categoría: {categoriaProducto}</p>
        <p className="card-text">Modelo: {modeloProducto}</p>
        <p className="card-text">Marca: {marcaProducto}</p>
        <p className="card-text">Precio: ${precioProducto}</p>
        <p className="card-text">{descripcionProducto}</p>
        <p className="card-text">Disponibilidad: {disponibilidad ? 'Disponible' : 'No disponible'}</p>
        <button className="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
