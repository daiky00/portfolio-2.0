import React from 'react';
import MeTwo from './images/profile.jpg';
import Header from './layout/Header';
import Img from './components/Img';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Navigation from './components/Navigation';
import { useNavigate } from 'react-router-dom';

const App = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header>
				<Grid>
					<Row middle="xs" center="xs" start="lg">
						<Col xs={12} lg={8}>
							<Img
								src={MeTwo}
								sizeX="102px"
								style={{ borderRadius: '50%', cursor: 'pointer' }}
								onClick={() => navigate('/')}
							/>
						</Col>
						<Col xs={12} lg={4}>
							<Navigation />
						</Col>
					</Row>
				</Grid>
			</Header>
			<Content />
			<Footer />
		</>
	);
};

export default App;
