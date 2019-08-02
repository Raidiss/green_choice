import React from 'react';

import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetails from '../pages/ProductDetailsPage';
import NewsPage from '../pages/NewsPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/news' component={NewsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
    </Switch>
);

export default Router;