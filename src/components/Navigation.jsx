import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from './List/ListItem';
import List from './List/List';

class Navigation extends Component {
	state = {};
	render() {
		return (
			<list>
				<ListItem inline>
					<NavLink to="/">Home</NavLink>
				</ListItem>
				<ListItem inline>
					<NavLink to="/work">Work</NavLink>
				</ListItem>
				<ListItem inline>
					<NavLink to="/about">About</NavLink>
				</ListItem>
				<ListItem inline>
					<NavLink to="/contact">Contact</NavLink>
				</ListItem>
			</list>
		);
	}
}

export default Navigation;
