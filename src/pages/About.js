import React from 'react';
import Land from '../images/land.svg';
import Img from '../components/Img';
import Paragraph from '../components/Paragraph';
import Pushing from '../components/Pushing/Pushing';
import Divider from '../components/Divider';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import { Grid, Row, Col } from 'react-flexbox-grid';

const About = () => (
	<React.Fragment>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title color="#4ab19a">About me</Title>
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
		<Grid>
			<Row center="xs">
				<Pushing />
				<Col xs={12}>
					<SubTitle>Pushing myself to the next level</SubTitle>
				</Col>
				<Col xs={12} lg={6}>
					<Paragraph>
						I'm just like the animation above, I keep pushing myself to the next level no matter how many times I fail, 
						I keep it rolling until I overcome the obstacle in front of me. Obstacles are part of our everyday life and 
						I found myself almost giving up. But hey!, I am a very stubborn guy so I never did.
					</Paragraph>
				</Col>
			</Row>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<Row center="xs">
				<Col xs={12} lg={6}>
					<SubTitle>I love to learn new things</SubTitle>
					<Paragraph>
					Knowing how to code is mostly about building things, and the path is clear when you have a sense of the end goal. 
					But is it bad not having an end goal ? because I don't, I just keep learning new things all the time. I believe in the 
					programming field there is not end to learning new languages and new ways to program. Technology just keep growing every single year, 
					so we would never reach an end goal this is a fact for programmers.
					</Paragraph>
				</Col>
				<Col xs={12} lg={6}>
					<SubTitle>Personal information</SubTitle>
					<Paragraph>
						After going to college I realize that it was not my thing and I started working on my own projects from home while learning how to code. 
						I turn out to be a very good frontend developer and CEO since I manage to made my first idea and goal come to life and actually made a 
						good amount of money out of it. Since building my first website back in 2011 I have continued to be captivated and in love with what the 
						web has to offer to consumers and professionals. I enjoy when I deliver high quality builds for the client and my own gratification. I love 
						overcoming challenges in development with particular focus in all things web standards, accessibility, semantic code, user experience and 
						building website good practices.
					</Paragraph>
				</Col>
			</Row>
			</Grid>
	</React.Fragment>
);

export default About;
