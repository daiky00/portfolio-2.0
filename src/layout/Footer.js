import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoIosHeart } from 'react-icons/io';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';

const Footer = () => (
	<Section backgroundColor="#e9eda0">
		<Grid>
			<Row center="xs">
				<Col xs={12}>
          <Paragraph>
            Made with <IoIosHeart style={{color: "red"}}/> by Francisco Pena
          </Paragraph>
				</Col>
			</Row>
		</Grid>
	</Section>
);

export default Footer;
