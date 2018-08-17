import React from 'react';
import Land from '../images/land.svg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';

const About = () => (
	<div>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>About me</Title>
					</Col>
					<SubTitle>Things you should know about me</SubTitle>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Img src={Land} sizeX="100%" sizeY="120%" max="600px" />
					</Col>
				</Row>
			</Grid>
		</Section>
	</div>
);

export default About;
