import React, { useState } from 'react';

const ProductSort = ({ handleSort }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);

    // Llamamos a la función handleSort y le pasamos el valor de la opción seleccionada
    handleSort(selectedValue);
  };

  const handleReset = () => {
    setSelectedOption('');
    // Llamamos a la función handleSort y le pasamos un string vacío para desmarcar cualquier opción marcada
    handleSort('');
  };

  return (
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
      {selectedOption && <button className="btn btn-secondary" onClick={handleReset}>Desmarcar</button>}
    </div>
  );
};

export default ProductSort;
