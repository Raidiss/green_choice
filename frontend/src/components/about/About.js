import React, { Component } from 'react';
import Milly from './milly.png';
import Raidis from './ChaconRaidis.jpg';
// import Jumbotron from '../Jumbotron/Jumbotron';



class About extends Component {
    render() {
        return (
            <div className="container text-center">

                <h3>Our mission </h3>
                <p>Many of the products we buy and consume are harming the plant. So we strive to educate people and make the "going green" process as simple and effortless as possible. However, we do emphasize how important this is and how we want you to become a part of the solution that will take care of this planet for all those here, and for those who we're handing it off to. </p>
                <hr />
                <img src={ Raidis } className="raidis" alt="..." height="200rem"></img>
                <img src={ Milly } className="milly" alt="..." height="200rem"></img>
                
                        <h5 className="mt-0">Green choice creators</h5>
                        We are two wyncode students who are trying to help the planet and help people live a sustainable lifestyle. We support your green decisions!
                    </div>
        );
    }
}

export default About;