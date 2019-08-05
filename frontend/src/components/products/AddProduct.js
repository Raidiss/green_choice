import React, { Component } from 'react';
import axios from 'axios';
import '../../app/App.css';

class AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            link: '',
            description: '',
            message: '',
            messageClass: 'success-msg',
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
        axios.post('/products/add', postBody)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        title: '',
                        image: '',
                        link: '',
                        description: '',
                        message: 'The product was successfully added',
                        messageClass: 'success-msg',
                        tags: []
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { title, image, link, message, messageClass, description, tags } = this.state;
        return (
            <div>
                <h4 className="form-header">Add Green Product</h4>
                <span className={messageClass} id="messageLabel">{message}</span>
                <br />
                <br />
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="form-label" htmlFor="title">Name:</label>
                        <input className="form-control"
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Product Name"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="image">Image Url:</label>
                        <input className="form-control"
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Url to the product image"
                            value={image}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="link">Product Url:</label>
                        <input className="form-control"
                            type="text"
                            id="link"
                            name="link"
                            placeholder="Product Url"
                            value={link}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="description">Description:</label>
                        <textarea className="form-control"
                            placeholder="Product Description"
                            type="text"
                            id="description"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="tags">Categories:</label>
                        <select name="tags"
                            id="tags"
                            multiple="multiple"
                            className="form-control"
                            onChange={this.handleTagsChange}>

                            <option value="home" selected={tags.includes('home')}>Home</option>
                            <option value="kitchen" selected={tags.includes('kitchen')}>Kitchen</option>
                            <option value="personal" selected={tags.includes('personal')}>Personal Care</option>
                            <option value="baby" selected={tags.includes('baby')}>Baby</option>
                            <option value="kids" selected={tags.includes('kids')}>Kids</option>
                            <option value="beauty" selected={tags.includes('beauty')}>Beauty</option>
                            <option value="technology" selected={tags.includes('technology')}>Technology</option>
                            <option value="shoes" selected={tags.includes('shoes')}>Shoes</option>
                            <option value="clothes" selected={tags.includes('clothes')}>Clothes</option>
                            <option value="health" selected={tags.includes('health')}>Health</option>
                        </select>
                    </div>
                    <div className="form-group ">
                        <button
                            className="btn btn-dark"
                            onClick={this.handleSubmit}
                            type="submit">Add Product</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProduct;