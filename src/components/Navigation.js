import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from './List/ListItem';
import List from './List/List';

const Navigation = () => {
  return (
    <List>
      <ListItem inline>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem inline>
        <NavLink to="/work">Work</NavLink>
      </ListItem>
      <ListItem inline>
        <NavLink to="/about">About</NavLink>
      </ListItem>
    </List>
  );
}

export default Navigation;
