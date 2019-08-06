import React, { Component } from 'react';
import Milly from './milly.png';
import Raidis from './ChaconRaidis.jpg';
// import Jumbotron from '../Jumbotron/Jumbotron';



class About extends Component {
    render() {
        return (
            // <div className="container text-center">

            //     <h3>Our mission </h3>
            //     <p>Many of the products we buy and consume are harming the plant. So we strive to educate people and make the "going green" process as simple and effortless as possible. However, we do emphasize how important this is and how we want you to become a part of the solution that will take care of this planet for all those here, and for those who we're handing it off to. </p>
            //     <hr />
            //     <img src={ Raidis } className="raidis" alt="..." height="200rem"></img>
            //     <img src={ Milly } className="milly" alt="..." height="200rem"></img>
                
            //             <h5 className="mt-0">Green choice creators</h5>
            //             We are two wyncode students who are trying to help the planet and help people live a sustainable lifestyle. We support your green decisions!
            //         </div>
                <div>
                <div className="container">
                    <div class="row">
                    <div class="col-md">
                        <img src="https://cdn.pixabay.com/photo/2019/06/16/12/06/garbage-4277613_1280.jpg" className="img-fluid" alt="pollution" ></img>
                    </div>
                        <div className="col-md">
                        <h3>Our mission </h3>
                        <p>Many of the products we buy and consume are harming the plant. So we strive to educate people and make the "going green" process as simple and effortless as possible. However, we do emphasize how important this is and how we want you to become a part of the solution that will take care of this planet for all those here, and for those who we're handing it off to. </p>
                        </div>
                    </div>
                </div>
                 <br></br>
                 <br></br>
                 <hr></hr>
                 <div className="container">
                    <div class="row">
                    <div class="col-md">
                        <img src="https://cdn.pixabay.com/photo/2019/05/14/16/00/nature-4202725_1280.jpg" className="img-fluid" alt="pollution" ></img>
                    </div>
                        <div className="col-md">
                        <h3>WHY IT MATTERS</h3>
                        <p>Plastic pollution is destroying our oceans and harming the animals who call them home; the food, beauty, and fashion industries contribute to the cruel and needless deaths of billions of animals annually; animal agriculture is rapidly destroying habitats across the globe and is a leading cause of greenhouse gases; and more people than ever suffer from health problems.</p>
                        <p>But all is not lost. Every one of us can make a real difference, simply by making lifestyle changes.</p>
                        <p>Every person following sustainable lifestyle saves 365 animals, prevents the destruction of 10,950 sq. ft. of forest, and reduces CO2 emissions by 7,300 lbs., annually. Plus, you make the world a happier and healthier place for all beings.</p>
                        </div>
                    </div>
                </div>
                 <br></br>
                 <br></br>
                 <hr></hr>
                <div className="container">
                <div className="row">
                <div className="col-sm">
                    <img src={ Raidis } className="raidis" alt="..." height="350rem"></img>
                    <img src={ Milly } className="milly" alt="..." height="350rem"></img>   
                </div>
                    <div className="col-sm">
                    <h5 className="mt-0">Green choice creators</h5>
                    <p> We are two wyncode students who are trying to help the planet and help people live a sustainable lifestyle. We support your green decisions!</p>
                    </div>
                </div>
                </div>
                <br></br>
               
            </div> 
            
        );
    }
}

export default About;