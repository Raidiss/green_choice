import React, { Component } from 'react';
import axios from 'axios';

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {}
        }
    }

    componentDidMount = () => {
        const id = this.props.id;
        axios.get(`/products/${id}`)
            .then(response => {
                this.setState({
                    product: response.data
                })
            })
            .catch(() => {

            })
            .finally(() => {
                console.log(this.state.product);
            })
    }

    render() {
        const { image, title, description, link } = this.state.product;
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer">
                            <a target="blank" className="btn btn-dark" href={link}>Go To Store</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;