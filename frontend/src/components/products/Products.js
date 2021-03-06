import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

import Search from '../search/Search';

import './styles.css';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        const json = sessionStorage.getItem("products");
        const products = JSON.parse(json);
        if (products) {
            this.setState({ products: products })
        }

        let getUrl = '/products';
        if (this.props.history && this.props.history.location && this.props.history.location.search) {
            getUrl += this.props.history.location.search;
        }
        this.fetchProducts(getUrl);
    }

    fetchProducts = (getUrl) => {
        axios.get(getUrl)
        .then(response => {
            this.setState({
                products: response.data
            })
        })
        .catch(() => {
            //TODO show some error 
        })
        .finally(() => {
            console.log(this.state.products);
        })
    }

    componentDidUpdate = () => {
        const products = JSON.stringify(this.state.products)
        sessionStorage.setItem("products", products)
    }

    onProductsSearch = (searchTerm) => {
        this.props.history.push(`/products?q=${searchTerm}`);
        this.fetchProducts(`/products?q=${searchTerm}`);
    }

    render() {
        return (
            <div>
                <Search onSearch={this.onProductsSearch} />

                <h2 className="text-center">Explore our Products</h2>

                <div className="row">
                    <div className="card-group">
                        {this.state.products.map((item, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex">
                                <Product product={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;