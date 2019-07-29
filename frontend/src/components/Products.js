import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

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

        axios.get('/products')
            .then(response => {
                this.setState({
                    products: response.data.products
                })
            })
            .catch(() => {

            })
            .finally(() => {
                console.log(this.state.products);
            })
    }

    componentDidUpdate = () => {
        const products = JSON.stringify(this.state.products)
        sessionStorage.setItem("products", products)
      }

    render() {
        return (
            <div className="container container-fluid">
                <div className="row">
                    <div class="card-group">
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