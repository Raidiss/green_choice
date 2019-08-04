import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Search from '../search/Search';

import './styles.css'

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
        this.props.history.push(`/products?q=${searchTerm}`);
    }

    render() {
        return (
            <div>
                <Search onSearch={this.onProductsSearch} />
                <h2 className="text-center">Search by category</h2>
                <br></br>
                <div className="row">
                    <div className="card category col-lg-4 col-md-6 col-sm-12 d-flex">
                        <Link to={'/products?tags[]=home&tags[]=kitchen'}>
                            <img src='https://www.bing.com/th?id=OIP.k7ihhOMqew2rJzLVX_XeEQHaHa&pid=Api&rs=1' className="card-img-top" alt='...' />
                            <h5 className="card-title">Home & Kitchen</h5>
                        </Link>
                    </div>
                    <div className="card category col-lg-4 col-md-6 col-sm-12 d-flex">
                        <Link to={'/products?tags[]=baby&tags[]=kids'}>
                            <img src='https://www.bing.com/th?id=OIP.-y62k5koPaR34Isqw2JvIAHaG7&pid=Api&rs=1' className="card-img-top" alt='...' />
                            <h5 className="card-title">Baby & Kids</h5>
                        </Link>
                    </div>
                    <div className="card category col-lg-4 col-md-6 col-sm-12 d-flex">
                        <Link to={'/products?tags[]=personal'}>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/71xEAkQ3GiL._SX522_.jpg' className="card-img-top" alt='...' />
                            <h5 className="card-title">Personal Care</h5>
                        </Link>
                    </div>
                    <div className="card category col-lg-4 col-md-6 col-sm-12 d-flex">
                        <Link to={'/products?tags[]=beauty&tags[]=health'}>
                            <img src='https://cdn.cliqueinc.com/posts/238942/skincare-gift-sets-238942-1508169527384-product.600x0c.jpg' className="card-img-top" alt='...' />
                            <h5 className="card-title">Beauty & Health</h5>
                        </Link>
                    </div>
                    <div className="card category col-lg-4 col-md-6 col-sm-12 d-flex">
                        <Link to={'/products?tags[]=clothes&tags[]=shoes'}>
                            <img src='http://www.2ndtake.co.za/wp-content/uploads/2012/05/green-clothing.jpg' className="card-img-top" alt='...' style={{ marginTop: 50 }} />
                            <h5 className="card-title">Clothing & Shoes</h5>
                        </Link>
                    </div>
                    <div className="card category col-lg-4 col-md-6 col-sm-12 d-flex">
                        <Link to={'/products?tags[]=technology'}>
                            <img src='https://www.energystream-wavestone.com/wp-content/uploads/2015/01/%C2%A9-lapencia-Fotolia.com_ampoule.jpg' className="card-img-top" alt='...' />
                            <h5 className="card-title">Green Technology</h5>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;