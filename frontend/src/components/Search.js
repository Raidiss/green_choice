import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }

    handleSearch = (e) => {
        e.preventDefault();

        console.log(e.target.query.value);
        if (e.target.query.value) {
            console.log(e.target.query.value);
            this.props.history.push(`/products?q=${e.target.query.value}`)
        }

        // this.setState({
        //     search: e.target.query.value
        // })
    }

    render() {
        return (
            <div className="input-group mb-5 mt-5">
                <form onSubmit={this.handleSearch}>
                    <input name="query" type="text" className="form-control" placeholder="find a greener option" aria-label="Search Green" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;