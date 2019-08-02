import React from 'react';

import ProductDetail from '../components/products/ProductDetails'

const ProductsPage = (props) => {
  const id = props.match.params.id;

  return (
    <div className="page container">
      <ProductDetail id={id} />
    </div>
  );
};

export default ProductsPage;