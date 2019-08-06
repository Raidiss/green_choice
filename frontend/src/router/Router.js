import React from 'react';

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetails from '../pages/ProductDetailsPage';
import NewsPage from '../pages/NewsPage';
import AboutPage from '../pages/AboutPage';
import StatsPage from '../pages/StatsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AddProductPage from '../pages/AddProductPage';

const Router = ({ refreshSession }) => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/products/add' component={AddProductPage} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/news' component={NewsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/stats' component={StatsPage} />
        <Route path='/login' render={props => <LoginPage {...props} onRefresh={refreshSession} />} />
        <Route path='/register' render={props => <RegisterPage {...props} onRefresh={refreshSession} />} />
    </Switch>
);

export default Router;