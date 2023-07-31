import React from 'react';

const ProductSearch = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Search products" />
      <button className="btn btn-outline-secondary" type="button">Search</button>
    </div>
  );
};

export default ProductSearch;
