import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Content = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/work" component={Work} />
		<Route exact path="/about" component={About} />
		<Route exact path="/contact" component={Contact} />
	</Switch>
);

export default Content;
