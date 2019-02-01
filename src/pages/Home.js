import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoLogoGameControllerB } from 'react-icons/io';
import { IoMdFitness } from 'react-icons/io';
import LazyLoad from 'react-lazyload';
import Me from '../images/me.svg';
import Desk from '../images/desk.svg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import Social from '../components/Social';

//Companies
import Hilti from '../images/hilti.jpg';
import Jpmorgan from '../images/jpmorgan.jpg';
import IBM from '../images/ibm.jpg';
import BankOfAmerica from '../images/bankofamerica.jpg';
import CapitalOne from '../images/capitalone.jpg'
import SungradeSolar from '../images/sungrade.svg'

import AudioPlayer from "react-h5-audio-player";

const Player = () => (
	<React.Fragment>
		<Img src="images/deadmau5.jpg" sizeX="100%" max="400px" rounded="50%" />
		<AudioPlayer
			autoPlay
			loop
			preload='auto'
			src='mp3/deadmau5.mp3'
			onPlay={e => console.log("onPlay")}
			// other props here
		/>
	</React.Fragment>
);

const Home = () => (
	<div>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title color="#4ab19a">Francisco</Title>
						<SubTitle>Senior Frontend Developer/Designer</SubTitle>
						<Social />
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Img src={Desk} sizeX="100%" sizeY="100%" max="600px" />
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
				<Col xs={12} lg={6}>
					<Paragraph>
						I'm a Senior Frontend Developer/Designer based in Plano, TX. I have a passion for web
						development and I love to create new things for the web and mobile devices.
					</Paragraph>
					<Paragraph>
						I enjoy turning complex problems into simple, beautiful and intuitive interfaces with responsive
						design. When I'm not coding or pushing pixels, you'll find me in the gym <IoMdFitness /> or
						playing some video games <IoLogoGameControllerB />.
					</Paragraph>
				</Col>
			</Row>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<LazyLoad height={200} offset={-250}>
				<Row center="xs">
					<Col xs={12}>
						<SubTitle>What I can do</SubTitle>
					</Col>
					<Col xs={12} lg={6}>
						<Paragraph>FRAMEWORKS</Paragraph>
						<i className="icons devicon-angularjs-plain colored" />
						<i className="icons devicon-vuejs-plain colored" />
						<i className="icons devicon-react-plain colored" />
						<Paragraph>LANGUAGES</Paragraph>
						<i className="icons devicon-html5-plain colored" />
						<i className="icons devicon-css3-plain colored" />
						<i className="icons devicon-javascript-plain colored" />
						<Paragraph>SUPER POWERS</Paragraph>
						<i className="icons devicon-typescript-plain colored" />
						<i className="icons devicon-sass-original colored" />
						<i className="icons devicon-less-plain-wordmark colored" />
						<Paragraph>MAGIC</Paragraph>
						<i className="icons devicon-gulp-plain colored" />
						<i className="icons devicon-grunt-plain colored" />
						<i className="icons devicon-webpack-plain colored" />
					</Col>
					<Col xs={12} lg={6}>
						<Paragraph> LISTEN TO SOME MUSIC</Paragraph>
						<Player />
					</Col>
				</Row>
			</LazyLoad>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<LazyLoad height={400} offset={-250}>
				<Row center="xs">
					<Col xs={12}>
						<SubTitle>Currently Working at</SubTitle>
					</Col>
					<Col xs={12} >
						<Img src={SungradeSolar} sizeX="100%" sizeY="100%" max="600px"/>
					</Col>
				</Row>
			</LazyLoad>
			<Row center="xs">
				<Col xs={2} md={1}>
					<Divider />
				</Col>
			</Row>
			<LazyLoad height={400} offset={-250}>
				<Row center="xs">
					<Col xs={12}>
						<SubTitle>Companies I have work for</SubTitle>
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={Hilti} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={BankOfAmerica} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={Jpmorgan} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={IBM} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3}>
						<Img src={CapitalOne} sizeX="100%" sizeY="100%" />
					</Col>
				</Row>
			</LazyLoad>
		</Grid>
	</div>
);

export default Home;
