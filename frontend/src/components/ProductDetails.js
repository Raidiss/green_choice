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
        const id = this.props.match.params.id;
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
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={image} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
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