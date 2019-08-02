import React, { Component } from 'react';
import Milly from './milly.png';


class About extends Component {
    render() {
        return (
            <div className="container text-center">
                <h3>About Us</h3>

                <div class="media">
                <img src={ Milly } class="mr-3" alt="..." height="100px"></img>
                    <div class="media-body">
                        <h5 class="mt-0">Media heading</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </div>
            </div>
        );
    }
}

export default About;