import React from "react";
import { BrowserRouter } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Router from "../router/Router";

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Router />
          <br></br>
          <br></br>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
