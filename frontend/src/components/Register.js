import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })

    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/users/add', { email: this.state.email, password: this.state.password })
            .then(response => {
                console.log("This worked")
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-center">
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={this.handlePasswordChange}></input>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="checkTerms"></input>
                        <label className="form-check-label" htmlFor="checkTerms">I agree to some extremely burdensome terms of service in which you may use my data for extremely invasive purposes of which I am completely unaware.</label>
                    </div>
                    <button type="submit" className="btn btn-dark center-block">Submit</button>
                </form>
            </div>
        );
    }
}

export default Register;