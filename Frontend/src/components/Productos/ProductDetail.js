import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="product-image.jpg" className="img-fluid" alt="Product" />
        </div>
        <div className="col-md-6">
          <h2>Product Name</h2>
          <p>Product Description</p>
          <p className="price">$99.99</p>
          <button className="btn btn-primary">Add to Cart</button>
          {/* Add more product details here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
