import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Categories from './Categories';
import Products from './Products';
import News from './News';
import About from './about/About';
import ProductDetails from './ProductDetails';
import SignIn from './SignIn';
import Register from './Register';
import Contact from './Contact';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Categories} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/products' component={Products} />
        <Route path='/news' component={News} />
        <Route path='/about' component={About} />
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={Register} />
        <Route path='contact' component={Contact} />
    </Switch>
);

export default Router;