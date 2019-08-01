import React from "react";
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Footer from "./components/Footer";
import Router from "./components/Router";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
