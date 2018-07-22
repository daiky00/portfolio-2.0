import React from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Code from '../components/Code/Code';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Work = () => (
	<div>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>My work</Title>
						<SubTitle>My portfolio made with coffee</SubTitle>
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Code />
					</Col>
				</Row>
			</Grid>
		</Section>
	</div>
);

export default Work;
