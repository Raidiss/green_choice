import React, { Component } from 'react';

import './styles.css'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }

    handleSearch = (e) => {
        e.preventDefault();

        if (e.target.query.value) {
            this.props.onSearch(e.target.query.value)
        }

        // this.setState({
        //     search: e.target.query.value
        // })
    }

    render() {
        return (
            <form onSubmit={this.handleSearch} className="search-bar">
                <div className="input-group input-group-lg mb-3">
                    <input name="query" autoComplete="off" type="text" className="form-control" placeholder="Find a greener option" aria-label="Search Green" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit" id="button-addon2">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;