import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => (
    <div className="card border-light flex-fill">
        <Link to={`/products/${product.id}`}>
            <img src={product.image} className="card-img-top" alt={product.title} />
        </Link>
        <div className="card-body" />
        <div className="card-footer">
            <Link to={`/products/${product.id}`}>
                <h5 className="card-title">{product.title}</h5>
            </Link>
        </div>
    </div>
);

export default Product;