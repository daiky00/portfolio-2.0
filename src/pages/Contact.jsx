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
					<SubTitle>You want to get in touch with me?</SubTitle>
				</Row>
			</Grid>
		</Section>
	</div>
);

export default Contact;
