import React, {Component} from 'react';
import './jumbotron.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Art from './art-close-up.jpg';
import Bonding from './bonding.jpg';
import Mothernature from './Mothernature.png'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as JumbotronActions from "../../store/jumbotron/actions";


export default class Jumbotron extends Component {
    render() {
      return (
        <div className="bd-example ">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol> 
            <a className="btn button" href="#" role="button">Checkout Products</a>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ Art } className="d-block w-100 art" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Green Choice</h5>
                  <p>Something persuasive about green choice.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ Bonding } className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>We are in this together</h5>
                  <p></p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ Mothernature } className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Be the change you want to see</h5>
                  <p>The world is lead by your example not by your opinion.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      );
    }
  }
