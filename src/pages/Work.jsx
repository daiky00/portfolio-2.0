import React from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Work = () => (
	<div>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>My work</Title>
					</Col>
					<SubTitle>My portfolio made with coffee</SubTitle>
				</Row>
			</Grid>
		</Section>
	</div>
);

export default Work;
