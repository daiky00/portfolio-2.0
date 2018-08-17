import React, { Component } from 'react';
import ListItem from './List/ListItem';
import List from './List/List';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io';

class Social extends Component {
	render() {
		return (
			<List>
				<ListItem inline>
					<a className="icons" href="https://github.com/daiky00">
						<IoLogoGithub />
					</a>
				</ListItem>
				<ListItem inline>
					<a className="icons" href="https://www.linkedin.com/in/francisco-pena/">
						<IoLogoLinkedin />
					</a>
				</ListItem>
			</List>
		);
	}
}

export default Social;
