import React from 'react';

const ProductFilter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <select className="form-select mb-3" aria-label="Select Category">
            <option selected>Category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            {/* Add more category options here */}
          </select>
        </div>
        <div className="col-md-3">
          <input type="range" className="form-range mb-3" min="0" max="100" />
        </div>
        {/* Add more filter options here */}
      </div>
    </div>
  );
};

export default ProductFilter;
