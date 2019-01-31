import React from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Contact = () => (
	<div>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title>Contact me</Title>
					</Col>
					<SubTitle>Feel free to contact me for business or job offers</SubTitle>
				</Row>
			</Grid>
		</Section>
	</div>
);

export default Contact;
