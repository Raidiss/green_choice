import React from 'react';

import Products from '../components/products/Products'

const ProductsPage = ({ history }) => (
  <div className="page container">
    <Products history={history} />
  </div>
);

export default ProductsPage;