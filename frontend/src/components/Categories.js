import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';


class Categories extends Component {
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
                    products: response.data
                })
            })
            .catch(() => {

            })
            .finally(() => {
                console.log(this.state.products);
            })
    }

    onProductsSearch = (searchTerm) => {
        console.log(searchTerm);
        this.props.history.push(`/products?q=${searchTerm}`)
    }

    render() {
        return (
            <div>
                <Search onSearch={this.onProductsSearch} />
                <h3>Goods to help you live with less waste!!</h3>
                <br></br>
                <br></br>
                <div className="container container-fluid">
                    <div className="row">
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=home&tags[]=kitchen'}>
                                <img src='https://static.wixstatic.com/media/03c254_375e7382e890417f8f9aa89e60573805~mv2.png/v1/fill/w_368,h_368,al_c,q_80,usm_0.66_1.00_0.01/03c254_375e7382e890417f8f9aa89e60573805~mv2.webp' className="card-img-top" alt='...' />
                            </Link>
                        </div>
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=baby&tags[]=kids'}>
                                <img src='https://static.wixstatic.com/media/03c254_24b2e4f4fcb946c89dc305693539c082~mv2.png/v1/fill/w_368,h_368,al_c,q_80,usm_0.66_1.00_0.01/03c254_24b2e4f4fcb946c89dc305693539c082~mv2.webp' className="card-img-top" alt='...' />
                            </Link>
                        </div>
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=personal'}>
                                <img src='https://static.wixstatic.com/media/03c254_7691565b07434aada68b2b8cecbe3384~mv2.png/v1/fill/w_368,h_368,al_c,q_80,usm_0.66_1.00_0.01/03c254_7691565b07434aada68b2b8cecbe3384~mv2.webp' className="card-img-top" alt='...' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;