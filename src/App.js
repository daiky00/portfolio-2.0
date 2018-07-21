import React, { Component } from 'react';
import Me from './me.svg';
import Header from './components/header';
import Avatar from './components/avatar';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Grid>
						<Avatar src={Me} size="102px" />
					</Grid>
				</Header>
			</React.Fragment>
		);
	}
}

export default App;
