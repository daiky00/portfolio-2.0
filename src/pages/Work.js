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


import NamiML from '../images/namiml.png'
import HiltiSite from '../images/hiltisite.png'
import Otakuchan from '../images/otakuchan.png'
import SungradeSolarSite from '../images/sungradesolarsite.png'
import Omgkawaii from '../images/omgkawaiii.png';

const Work = () => (
	<div>
		<Section backgroundColor="#e9eda0">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title color="#5a9e43">My work</Title>
						<SubTitle>My Last 4 Projects made with coffee</SubTitle>
					</Col>
				</Row>
				<Row bottom="xs" center="xs">
					<Col xs={12}>
						<Code />
					</Col>
				</Row>
			</Grid>
		</Section>
    <Section backgroundColor="#1374de">
				<Grid>
					<Row center="xs">
						<Col xs={12}>
							<Title color="#021f3e">Nami ML</Title>
							<SubTitle color="#ffffff">Senior Frontend Engineer</SubTitle>
							<LazyLoad height={1300} offset={-50}>
								<Img src={NamiML} sizeX="100%" />
							</LazyLoad>
							<Paragraph color="#ffffff"> 
							  The Smartest Way to Sell Subscriptions. Built for the subscription era, 
                Nami is an end-to-end solution powered by on-device machine learning to accelerate your mobile app business. 
							</Paragraph>
							<Paragraph> 
								<Button color="#1374de" backgroundColor="#021f3e" href="https://www.namiml.com">Visit Nami</Button>
							</Paragraph>
						</Col>
					</Row>
				</Grid>
		</Section>
    <Section backgroundColor="#fc1681">
				<Grid>
					<Row center="xs">
						<Col xs={12}>
							<Title color="#ffbedc">Omg kawaii</Title>
							<SubTitle color="#ffbedc">Co-Founder & CTO</SubTitle>
							<LazyLoad height={1300} offset={-50}>
								<Img src={Omgkawaii} sizeX="100%" />
							</LazyLoad>
							<Paragraph color="#ffbedc"> 
                Our passion to make people smile provides us the motivation and the determination to rise this amazing plushies to a high level of 
                quality with a customer’s satisfaction as our main goal! 🐰 🦄 🐮 🐻 🐶 🦊 🦖 🐱 🦁. 🐷 🦒 🐘 🐼 🐤 🐢
							</Paragraph>
							<Paragraph> 
								<Button color="#fc1681" backgroundColor="#ffbedc" href="https://omgkawaii.com/">Visit Omg kawaii</Button>
							</Paragraph>
						</Col>
					</Row>
				</Grid>
		</Section>
    <Section backgroundColor="#5421a9">
				<Grid>
					<Row center="xs">
						<Col xs={12}>
							<Title color="#bf92ff">Otakuchan</Title>
							<SubTitle color="#ffffff">Co-Founder & CEO</SubTitle>
							<LazyLoad height={1300} offset={-50}>
								<Img src={Otakuchan} sizeX="100%" />
							</LazyLoad>
							<Paragraph color="#ffffff"> 
                Otakuchan.com is a retail experience created for fans of Anime, Games, Comics and Cartoons. We carry 100% officially licensed EXCLUSIVE apparel, accessories, and more from the biggest companies like Crunchyroll, Nintendo, Marvel, LucasFilm and many more.  💯
                We started Otakuchan.com to create one spot for all otakus that are fans of any type of art from Anime, Games, Comics or Cartoons you can find it all in our website.
							</Paragraph>
							<Paragraph> 
								<Button color="#5421a9" backgroundColor="#bf92ff" href="https://www.otakuchan.com">Visit Otakuchan</Button>
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
	</div>
);

export default Work;
