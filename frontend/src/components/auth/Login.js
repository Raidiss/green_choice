import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./Login.css"

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { onRefresh } = this.props;
        const { username, password } = this.state;
        axios.post('/login', { username: username, password: password })
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
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                //TODO show some error message
            })
    }

    render() {
        const { username, password, redirectTo } = this.state;
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: redirectTo }} />
        } else {
            return (
                <div>
                    <h4 className="form-header">Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Email"
                                    value={username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-dark col-1 col-mr-auto"

                                onClick={this.handleSubmit}
                                type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default SignIn;