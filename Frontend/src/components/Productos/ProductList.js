import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      nombreProducto: 'Producto 1',
      categoriaProducto: 'Categoría 1',
      modeloProducto: 'Modelo 123',
      marcaProducto: 'Marca A',
      precioProducto: 99.99,
      descripcionProducto: 'Descripción del producto 1',
      disponibilidad: true, // true si hay stock, false si no hay stock
    },
    {
      nombreProducto: 'Producto 2',
      categoriaProducto: 'Categoría 2',
      modeloProducto: 'Modelo 456',
      marcaProducto: 'Marca B',
      precioProducto: 129.99,
      descripcionProducto: 'Descripción del producto 2',
      disponibilidad: false,
    },
    {
      nombreProducto: 'Producto 3',
      categoriaProducto: 'Categoría 1',
      modeloProducto: 'Modelo 789',
      marcaProducto: 'Marca A',
      precioProducto: 79.99,
      descripcionProducto: 'Descripción del producto 3',
      disponibilidad: true,
    },
    {
      nombreProducto: 'Producto 1',
      categoriaProducto: 'Categoría 1',
      modeloProducto: 'Modelo 123',
      marcaProducto: 'Marca A',
      precioProducto: 99.99,
      descripcionProducto: 'Descripción del producto 1',
      disponibilidad: true, // true si hay stock, false si no hay stock
    },
    {
      nombreProducto: 'Producto 2',
      categoriaProducto: 'Categoría 2',
      modeloProducto: 'Modelo 456',
      marcaProducto: 'Marca B',
      precioProducto: 129.99,
      descripcionProducto: 'Descripción del producto 2',
      disponibilidad: false,
    },
    {
      nombreProducto: 'Producto 3',
      categoriaProducto: 'Categoría 1',
      modeloProducto: 'Modelo 789',
      marcaProducto: 'Marca A',
      precioProducto: 79.99,
      descripcionProducto: 'Descripción del producto 3',
      disponibilidad: true,
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([...products]); // Estado para almacenar la lista de productos filtrada
  const [selectedOption, setSelectedOption] = useState(''); // Estado para almacenar la opción seleccionada en ProductSort
  const [originalProducts, setOriginalProducts] = useState([...products]); // Estado para almacenar la lista original de productos


  const sortProducts = (option) => {
    // Lógica para ordenar la lista de productos según la opción seleccionada
    let sortedProducts = [...originalProducts]; // Usamos la lista original de productos para ordenar

    if (option === 'modelo') {
      sortedProducts.sort((a, b) => a.modeloProducto.localeCompare(b.modeloProducto));
    } else if (option === 'precioAsc') {
      sortedProducts.sort((a, b) => a.precioProducto - b.precioProducto);
    } else if (option === 'precioDesc') {
      sortedProducts.sort((a, b) => b.precioProducto - a.precioProducto);
    } else if (option === 'marca') {
      sortedProducts.sort((a, b) => a.marcaProducto.localeCompare(b.marcaProducto));
    } else if (option === 'categoria') {
      sortedProducts.sort((a, b) => a.categoriaProducto.localeCompare(b.categoriaProducto));
    }

    setFilteredProducts(sortedProducts); // Actualizamos el estado con la lista de productos filtrada y ordenada
  };

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === '') {
      // Si se desmarcó la opción, restauramos la lista original de productos
      setFilteredProducts([...originalProducts]);
    } else {
      // Si se seleccionó una opción, llamamos a la función sortProducts para ordenar la lista de productos
      sortProducts(selectedValue);
    }
  };


  //esto para cuando tenga la base de datos.
  /*useEffect(() => {
    // Realiza una petición al backend para obtener los productos desde la base de datos
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data); // Actualiza el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);*/

  useEffect(() => {
    // Actualizamos la lista original de productos cada vez que la lista completa de productos cambia
    setOriginalProducts([...products]);
    // También restauramos la lista de productos filtrada a la lista original
    setFilteredProducts([...products]);
  }, [products]);

  return (
    <div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="sortSelect">Ordenar por:</label>
        <select className="form-select" id="sortSelect" value={selectedOption} onChange={handleChange}>
          <option value="">--Seleccione una opción--</option>
          <option value="modelo">Modelo</option>
          <option value="precioAsc">Precio: Menos a Mayor</option>
          <option value="precioDesc">Precio: Mayor a Menor</option>
          <option value="marca">Marca</option>
          <option value="categoria">Categoría</option>
        </select>
        {selectedOption && <button className="btn btn-secondary" onClick={() => setSelectedOption('')}>Desmarcar</button>}
      </div>
      <div className="container">
        <div className="row">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col-md-4">
              <ProductCard
                nombreProducto={product.nombreProducto}
                categoriaProducto={product.categoriaProducto}
                modeloProducto={product.modeloProducto}
                marcaProducto={product.marcaProducto}
                precioProducto={product.precioProducto}
                descripcionProducto={product.descripcionProducto}
                disponibilidad={product.disponibilidad}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
