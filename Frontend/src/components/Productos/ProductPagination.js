import React from 'react';

const ProductPagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item active" aria-current="page">
        <a className="page-link" href="#!">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#!">2</a>
        </li>
        {/* Add more pagination items here */}
        <li className="page-item">
          <a className="page-link" href="#!">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductPagination;
