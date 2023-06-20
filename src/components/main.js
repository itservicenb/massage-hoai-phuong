//file for managing our react routes
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//importing our routes (components)
import Landing from './landing';
import About from './about';
import Services from './services';
import Booking from './booking';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" to={About} />
        <Route path="/aboutme" to={About} />
        <Route path="/services" component={Services} />
        <Route path="/book" component={Booking} />
        <Route path="/booking" component={Booking} />
        <Route path="/contact" component={Contact} />
        <Route path="/contactme" component={Contact} />
    </Switch>
);

export default Main;
