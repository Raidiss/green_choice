import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            lastname: ''
        }
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })

    }

    handleLastnameChange = (e) => {
        this.setState({
            lastname: e.target.value
        })

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

        axios.post('/register', { email: this.state.email, password: this.state.password, name: this.state.name, lastname: this.state.lastname })
            .then(response => {
                console.log("This worked")
            })
    }

    render() {
        return (
            <div>
                <h5>Welcome! We appreciate your interest in becoming one of our retail partners. We're excited to learn more about your business to see if we're a good fit and to assist you in selecting a great assortment of eco products by Green Choice!. Please fill out the form below to create a reseller account.
                </h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-center">
                    </div>
                    <div className="form-group">
                        <label htmlFor="nameInput">First name</label>
                        <input type="text" className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter first name" value={this.state.name} onChange={this.handleNameChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastnameInput">Last name</label>
                        <input type="text" className="form-control" id="lastnameInput" aria-describedby="lastnameHelp" placeholder="Enter last name" value={this.state.lastname} onChange={this.handleLastnameChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={this.handlePasswordChange}></input>
                    </div>
                    <button type="submit" className="btn btn-dark center-block">Create</button>
                </form>
            </div>
        );
    }
}

export default Register;