import React, { Component } from 'react';
import MeTwo from './metwo.svg';
import Header from './layout/Header';
import Img from './components/Img';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Content from './layout/Content';
import Navigation from './components/Navigation';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Grid>
						<Row middle="xs" center="xs" start="md">
							<Col xs={12} md={8}>
								<Img src={MeTwo} sizeX="102px" />
							</Col>
							<Col xs={12} md={4}>
								<Navigation />
							</Col>
						</Row>
					</Grid>
				</Header>
				<Content />
			</React.Fragment>
		);
	}
}

export default App;
