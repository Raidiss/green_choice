import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import './styles.css'

const API_KEY = process.env.REACT_APP_API_KEY;


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount = () => {
    axios.get(`https://newsapi.org/v2/everything?q=eco+friendly+free+plastic&apiKey=${API_KEY}&pageSize=6`)
      .then(response => {
        const data = response.data;
        const articles = data.articles;
        const filtered = articles.filter((a) => {
          return a.url && a.urlToImage;
        });
        const list = filtered.map((item, index) => {
          return {
            key: item.index,
            source: item.source.name,
            author: item.author,
            title: item.title,
            description: item.description,
            url: item.url,
            urlToImage: item.urlToImage,
            publishedAt: item.publishedAt
          };
        });

        this.setState({
          list: list
        });
      })
      .catch(error => {
        //TODO show some error message
      });
  }

  render() {
    return (
      <div className="grid-container">
        <h2 className="text-center">Lastest News</h2>
        <div className="row">
          {this.state.list.map((item, index) => (
            <div key={index} className="col-lg-6 col-md-12">
              <NewsItem
                source={item.source.name}
                title={item.title}
                author={item.author}
                description={item.description}
                urlToImage={item.urlToImage}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;