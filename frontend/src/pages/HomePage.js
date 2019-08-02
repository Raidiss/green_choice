import React from 'react';

import Jumbotron from '../components/jumbotron/Jumbotron'
// import Search from '../components/search/Search'
import Categories from '../components/categories/Categories'

const HomePage = ({ history }) => (
  <div className="page page-home">
    <Jumbotron />
    <div className="container">
      <Categories history={history} />
    </div>
  </div>
);

export default HomePage;