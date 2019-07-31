import React, { Component } from 'react';

class NewsItem extends Component {
    render () {
        return(
        <div className="news card">
          <div className="image-container">
            <a href={this.props.url} target="blank"><img className="card-img-top" src={this.props.urlToImage} alt={this.props.urlToImage}/></a>
              <div className="card-body">
                <h5 className="card-title"><a href={this.props.url} target="blank">{this.props.title}</a></h5>
                <div className="card-title">{this.props.author}</div>
                <p className="card-title">{this.props.description}</p>
                <div className="card-title">{this.props.publishedAt}</div>
                <br></br>
            </div>
          </div>
         </div>
       );
      }
 }
 
 export default NewsItem;