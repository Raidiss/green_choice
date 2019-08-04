import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';
import Jumbotron from './Jumbotron/Jumbotron';


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
                <Jumbotron />
            <div className="container">
                <Search onSearch={this.onProductsSearch} />
                <h3>Goods to help you live with less waste!!</h3>
                <br></br>
                <br></br>
                <div className="container container-fluid">
                    <div className="row">
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=home&tags[]=kitchen'}>
                                <img src='https://www.bing.com/th?id=OIP.k7ihhOMqew2rJzLVX_XeEQHaHa&pid=Api&rs=1' className="card-img-top" alt='...' />
                                <h5>Home & Kitchen Products</h5>
                            </Link>
                        </div>
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=baby&tags[]=kids'}>
                                <img src='https://www.bing.com/th?id=OIP.-y62k5koPaR34Isqw2JvIAHaG7&pid=Api&rs=1' className="card-img-top" alt='...' />
                                <h5>Baby & Kids Products</h5>
                            </Link>
                        </div>
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=personal'}>
                                <img src='https://images-na.ssl-images-amazon.com/images/I/71xEAkQ3GiL._SX522_.jpg' className="card-img-top" alt='...' />
                                <h5>Personal Care</h5>
                            </Link>
                        </div>
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=personal'}>
                                <img src='https://cdn.cliqueinc.com/posts/238942/skincare-gift-sets-238942-1508169527384-product.600x0c.jpg' className="card-img-top" alt='...' />
                                <h5>Beauty & Health </h5>
                            </Link>
                        </div>
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=personal'}>
                                <img src='http://www.2ndtake.co.za/wp-content/uploads/2012/05/green-clothing.jpg' className="card-img-top" alt='...' />
                                <h5>Clothing & Shoes</h5>
                            </Link>
                        </div>
                        <div className="card col-lg-4 col-md-6 col-sm-12 d-flex">
                            <Link to={'/products?tags[]=personal'}>
                                <img src='https://www.energystream-wavestone.com/wp-content/uploads/2015/01/%C2%A9-lapencia-Fotolia.com_ampoule.jpg' className="card-img-top" alt='...' />
                                <h5>Eco Technology</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Categories;