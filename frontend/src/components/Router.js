import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Categories from './Categories';
import Products from './Products';
import News from './News';
import About from './About';
import ProductDetails from './ProductDetails';
import SignIn from './SignIn';
import Register from './Register';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Categories} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/products' component={Products} />
        <Route path='/news' component={News} />
        <Route path='/about' component={About} />
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={Register} />
    </Switch>
);

export default Router;