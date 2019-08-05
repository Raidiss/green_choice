import React from "react";
import { BrowserRouter } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Router from "../router/Router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    this.refreshSession();
  }

  refreshSession = () => {
    const json = sessionStorage.getItem('currentUser');
    const user = JSON.parse(json);
    if (user) {
      this.setState({ user: user });
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header user={this.state.user} />
          <Router refreshSession={this.refreshSession} />
          <br></br>
          <br></br>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
export default App;
