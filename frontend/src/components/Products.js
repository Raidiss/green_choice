import React, { Component } from 'react';
import Product from './Pages/Products/Product';

class Products extends Component {

    render() {
        return (
            <div class="container">
                <div class="card-deck">
                    <Product img="https://www.kylecunniff.com/Kyle%20Cunniff/2014/01/Kyle-Cunniff-Package-Design.jpg" />
                    <Product img="http://www.webstaurantstore.com/images/products/extra_large/59128/689430.jpg" />
                    <Product img="https://cdnimg.webstaurantstore.com/images/products/extra_large/67424/868034.jpg" />
                </div>
                <div class="card-deck">
                    <Product img="https://www.kylecunniff.com/Kyle%20Cunniff/2014/01/Kyle-Cunniff-Package-Design.jpg" />
                    <Product img="http://www.webstaurantstore.com/images/products/extra_large/59128/689430.jpg" />
                    <Product img="https://cdnimg.webstaurantstore.com/images/products/extra_large/67424/868034.jpg" />
                </div>
            </div>
        );
    }
}

export default Products;