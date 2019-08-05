import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            link: '',
            description: '',
            tags: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleTagsChange = (event) => {
        const select = event.target;
        this.setState({
            tags: [].filter.call(select.options, o => o.selected).map(o => o.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const postBody = {
            title: this.state.title,
            image: this.state.image,
            link: this.state.link,
            description: this.state.description,
            tags: this.state.tags
        }
        console.log(`Title: ${postBody.title} 
        - Image: ${postBody.image} 
        - Link: ${postBody.link} 
        - Description: ${postBody.description}
        - Tags: ${postBody.tags}`);
        axios.post('/products/add', postBody)
            .then(res => {
                if (res.status === 200) {
                    //TODO do something here
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { title, image, link, description } = this.state;
        return (
            <div>
                <h5>All fields are required*
                </h5>
                <h4 className="form-header">Add Green Product</h4>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="title">Name:</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Product Name"
                                value={title}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="image">Image Url:</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="image"
                                name="image"
                                placeholder="Url to the product image"
                                value={image}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="link">Product Url:</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"
                                type="text"
                                id="link"
                                name="link"
                                placeholder="Product Url"
                                value={link}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="description">Description:</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <textarea className="form-input"
                                placeholder="Product Description"
                                type="text"
                                name="description"
                                value={description}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="tags">Categories:</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <select name="tags"
                                id="tags"
                                multiple="multiple"
                                onChange={this.handleTagsChange}>

                                <option value="home">Home</option>
                                <option value="kitchen">Kitchen</option>
                                <option value="personal">Personal Care</option>
                                <option value="baby">Baby</option>
                                <option value="kids">Kids</option>
                                <option value="beauty">Beauty</option>
                                <option value="technology">Technology</option>
                                <option value="shoes">Shoes</option>
                                <option value="clothes">Clothes</option>
                                <option value="health">Health</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-7"></div>
                        <button
                            className="btn btn-dark col-1 col-mr-auto"
                            onClick={this.handleSubmit}
                            type="submit">Add Product</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProduct;