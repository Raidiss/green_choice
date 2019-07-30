import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/Pages/Home/Home";
import About from './components/Pages/About/About';
import Categories from './components/Pages/Categories/Categories';
import Feed from './components/Pages/Feed/Feed';
import News from './components/Pages/News/News';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./components/Routes/Router";

class App extends React.Component {

  render() {
    return (
    <BrowserRouter>
      <Header />
      <Home />
      <Router />
      <Footer />
    </BrowserRouter>
    );
  }
}
export default App;
