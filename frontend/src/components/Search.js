import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="input-group mb-5 mt-5">
                <input type="text" className="form-control" placeholder="find a greener option" aria-label="Search Green" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        );
    }
}

export default Search;