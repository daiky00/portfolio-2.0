import React from 'react';
import Me from '../me.svg';
import Desk from '../desk.svg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Home = () => (
	<div>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>I'm Francisco</Title>
					</Col>
					<SubTitle>Senior Frontend Developer/Designer</SubTitle>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Img src={Desk} sizeX="100%" sizeY="120%" max="600px" />
					</Col>
				</Row>
			</Grid>
		</Section>
		<Grid>
			<Row center="xs">
				<Img src={Me} sizeX="152px" sizeY="200px" />
				<Col xs={12}>
					<SubTitle>Hi.</SubTitle>
				</Col>
				<Col xs={12} sm={6}>
					<Paragraph>
						I'm a Senior Frontend Developer/Designer based in Plano, TX. I have a passion for web
						development and I love to create new things for the web and mobile devices.
					</Paragraph>
				</Col>
			</Row>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
		</Grid>
	</div>
);

export default Home;
