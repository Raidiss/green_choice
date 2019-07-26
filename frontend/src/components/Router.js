import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Categories from './Categories';
import Products from './Products';
import News from './News';
import About from './About';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Categories} />
        <Route path='/products' component={Products} />
        <Route path='/news' component={News} />
        <Route path='/about' component={About} />
    </Switch>
);

export default Router;