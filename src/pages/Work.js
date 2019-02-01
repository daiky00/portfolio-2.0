import React from 'react';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Section from '../components/Section';
import Code from '../components/Code/Code';
import Img from '../components/Img';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LazyLoad from 'react-lazyload';

import HiltiSite from '../images/hiltisite.png'
import ASO from '../images/aso.png'
import SungradeSolarSite from '../images/sungradesolarsite.png'

const Work = () => (
	<div>
		<Section backgroundColor="#e0ebe8">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title color="#4ab19a">My work</Title>
						<SubTitle>My Last 3 Projects made with coffee</SubTitle>
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Code />
					</Col>
				</Row>
			</Grid>
		</Section>
		<Section backgroundColor="#31355b">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title color="#4299ed">Sungrade</Title>
						<SubTitle color="#ffffff">Lead Frontend Developer/Designer</SubTitle>
						<LazyLoad height={200} offset={-50}>
							<Img src={SungradeSolarSite} sizeX="100%" />
						</LazyLoad>
						<Paragraph color="#ffffff"> 
								At Sungrade, we’re all about the green power revolution, but we’re also changing the way business is done. Instead of just for profit, we’re for purpose, 
								striving to improve our living planet through civic responsibility, B-corp initiatives, and strategic partnerships. Together, we’re helping make our world 
								cleaner, fairer, and brighter for everyone.  
						</Paragraph>
						<Paragraph> 
							<Button color="#ffffff" backgroundColor="#4299ed" href="https://sungrade.solar">Visit Sungrade</Button>
						</Paragraph>
					</Col>
				</Row>
			</Grid>
		</Section>
		<Section backgroundColor="#d5031c">
				<Grid>
					<Row center="xs">
						<Col xs={12}>
							<Title color="#ffcc4e">Ask Hilti</Title>
							<SubTitle color="#ffffff">Senior Frontend Developer/Designer</SubTitle>
							<LazyLoad height={1300} offset={-50}>
								<Img src={HiltiSite} sizeX="100%" />
							</LazyLoad>
							<Paragraph color="#ffffff"> 
							Hilti was founded in 1941, and evolved from a small family company to the trusted global business we are today.
Our aim is to build a better future. By this we mean helping our customers to build faster, safer and with more daring, while all the time being mindful of the legacy we leave behind. We want to be proud of the mark we make on the world.
To ensure the integrity of our products, we run our own production plants and cutting-edge research and development centers right across the world. The group headquarters is in Schaan in the Principality of Liechtenstein, where Martin Hilti established the company 75 years ago.  
							</Paragraph>
							<Paragraph> 
								<Button color="#383b65" backgroundColor="#ffcc4e" href="https://ask.hilti.com">Visit Ask Hilti</Button>
							</Paragraph>
						</Col>
					</Row>
				</Grid>
		</Section>
		<Section backgroundColor="#21364b">
				<Grid>
					<Row center="xs">
						<Col xs={12}>
							<Title color="#a7e0f3">ASO</Title>
							<SubTitle color="#ffffff">CEO</SubTitle>
							<LazyLoad height={1300} offset={-50}>
								<Img src={ASO} sizeX="100%" />
							</LazyLoad>
							<Paragraph color="#ffffff"> 
							Anime Fans Love Us! We offer best service and great prices on Anime Products such as Clothes, Shoes and Accessories. 
							Shipping to 185 Countries Our Anime Store operates worldwide and you can enjoy free delivery of all your Anime orders. 
							100% Safe Payment Buy Anime Products with confidence using the world’s most popular and secure payment methods.
							</Paragraph>
							<Paragraph> 
								<Button color="#3e90ca" backgroundColor="#A8D7F9" href="https://www.anime-shop-online.com/">Visit ASO</Button>
							</Paragraph>
						</Col>
					</Row>
				</Grid>
		</Section>
	</div>
);

export default Work;
