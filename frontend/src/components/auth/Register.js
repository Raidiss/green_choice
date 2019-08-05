import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            name: '',
            lastname: '',
            redirectTo: null
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
            username: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { onRefresh } = this.props;
        axios.post('/register', { username: this.state.username, password: this.state.password, name: this.state.name, lastname: this.state.lastname })
            .then(res => {
                if (res.status === 200) {
                    let user = res.data;
                    delete user.password;
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                    onRefresh();
                    this.setState({
                        redirectTo: '/'
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { redirectTo } = this.state;
        if (redirectTo) {
            return <Redirect to={{ pathname: redirectTo }} />
        } else {
            return (
                <div>
                    <h5>Welcome! We appreciate your interest in becoming one of our retail partners. We're excited to learn more about your business to see if we're a good fit and to assist you in selecting a great assortment of eco products by Green Choice!. Please fill out the form below to create a reseller account.
                </h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="text-center">
                        </div>
                        <div className="form-group">
                            <label htmlFor="nameInput">First name</label>
                            <input type="text" className="form-control" id="nameInput" aria-describedby="nameHelp" placeholder="Enter first name" value={this.state.name} onChange={this.handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastnameInput">Last name</label>
                            <input type="text" className="form-control" id="lastnameInput" aria-describedby="lastnameHelp" placeholder="Enter last name" value={this.state.lastname} onChange={this.handleLastnameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email address</label>
                            <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput">Password</label>
                            <input type="password" className="form-control" id="passwordInput" placeholder="Password" onChange={this.handlePasswordChange} />
                        </div>
                        <button type="submit" className="btn btn-dark center-block">Create</button>
                    </form>
                </div>
            );
        }
    }
}

export default Register;