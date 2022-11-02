import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoLogoGameControllerB, IoMdFitness } from 'react-icons/io';
import LazyLoad from 'react-lazyload';
import Me from '../images/profile.jpg';
import Img from '../components/Img';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Paragraph from '../components/Paragraph';
import Divider from '../components/Divider';
import Social from '../components/Social';
import Desk from '../components/Desk/Desk';

//Companies
import Hilti from '../images/hilti.jpg';
import Jpmorgan from '../images/jpmorgan.jpg';
import IBM from '../images/ibm.jpg';
import BankOfAmerica from '../images/bankofamerica.jpg';
import CapitalOne from '../images/capitalone.jpg';
import SungradeSolar from '../images/sungrade.svg';
import NamiML from '../images/namiml-logo.jpg';
import OmgKawaii from '../images/omgkawaii.png'
import SteelPerlot from '../images/steelperlot-logo.jpg'

import AudioPlayer from "react-h5-audio-player";

const Player = () => (
	<React.Fragment>
		<Img src="images/kawaii.jpeg" sizeX="100%" max="500px" />
		<AudioPlayer
			autoPlay
			loop
			preload='auto'
			src='mp3/kawaii.mp3'
		/>
	</React.Fragment>
);

const Home = () => (
	<div>
		<Section backgroundColor="#e9eda0">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title color="#5a9e43">Francisco</Title>
						<SubTitle>Senior Frontend Developer/Designer</SubTitle>
						<Social />
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
          <Desk />
					</Col>
				</Row>
			</Grid>
		</Section>
		<Grid>
			<Row center="xs">
				<Img src={Me} sizeX="180px" sizeY="190px" style={{marginTop: 20, borderRadius: '50%'}} />
				<Col xs={12}>
					<SubTitle>Hi.</SubTitle>
				</Col>
				<Col xs={12} lg={6}>
					<Paragraph>
						I'm a Senior Frontend Developer/Designer based in Florida. I have a passion for web
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
            <Paragraph>OTHERS TOOLS</Paragraph>
            <i className="icons devicon-graphql-plain colored" />
            <i className="icons devicon-d3js-plain colored" />
            <i className="icons devicon-redux-original colored" />
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
          <Col xs={6} md={4} lg={3}>
						<Img src={OmgKawaii} sizeX="100%" sizeY="100%"/>
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
          <Col xs={6} md={4} lg={3} className="mb">
						<Img src={NamiML} sizeX="100%" sizeY="100%"/>
					</Col>
          <Col xs={6} md={4} lg={3} className="mb">
            <Img src={SteelPerlot} sizeX="100%" sizeY="100%"/>
          </Col>
					<Col xs={6} md={4} lg={3} className="mb">
						<Img src={Hilti} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3} className="mb">
						<Img src={BankOfAmerica} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3} className="mb">
						<Img src={Jpmorgan} sizeX="100%" sizeY="100%" />
					</Col>
					<Col xs={6} md={4} lg={3} className="mb">
						<Img src={IBM} sizeX="100%" sizeY="100%" />
					</Col>
          
          <Col xs={6} md={4} lg={3} className="mb">
            <Img src={CapitalOne} sizeX="100%" sizeY="100%" style={{border: '1px solid #f3f2f1'}}/>
          </Col>
          <Col xs={6} md={4} lg={3} className="mb" >
            <Img src={SungradeSolar} sizeX="90%" sizeY="100%" style={{border: '1px solid #f3f2f1', padding: '0 12px'}} />
          </Col>
        </Row>
      </LazyLoad>
     
      <Row center="xs">
        <Col xs={2} md={1}>
          <Divider />
        </Col>
      </Row>
		</Grid>
	</div>
);

export default Home;
