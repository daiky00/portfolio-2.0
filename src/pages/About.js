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
		<Section backgroundColor="#e9eda0">
			<Grid>
				<Row center="xs">
					<Col xs={12}>
						<Title color="#5a9e43">About me</Title>
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
						Just like the relentless persistence in the animation above, I
						persistently strive for the next level. Regardless of the countless
						times I've faltered, I continue to keep the momentum, overcoming
						every obstacle that stands in my path. Obstacles, after all, are the
						inevitable components of our daily lives, and there have been
						moments when I've been on the brink of surrender. But then, there's
						this unyielding stubbornness within me, a tenacity that simply
						refuses to bow down. I may waver, but I never yield; I may stumble,
						but I never fall.
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
						Mastering the art of coding largely revolves around creating and
						constructing - the path forward crystalizes when the end goal is in
						sight. However, I find myself journeying without a fixed
						destination, continuously nurturing my knowledge with each passing
						day. Is this lack of a defined goal detrimental? I don't believe so.
						In the realm of programming, there's an infinite landscape to
						explore; there's no boundary to the languages you can learn, nor a
						cap to the innovative programming techniques you can master. With
						technology evolving at an unstoppable pace each year, the goalposts
						are perpetually shifting. In essence, we programmers are marathon
						runners on a course that extends indefinitely - there's no finish
						line, and this is a reality we embrace. We learn, we grow, we adapt,
						in sync with the ever-advancing world of tech. It's not about
						reaching an 'end', it's about the journey and the continual
						evolution that it brings.
					</Paragraph>
				</Col>
				<Col xs={12} lg={6}>
					<SubTitle>Personal information</SubTitle>
					<Paragraph>
						Navigating the halls of a college campus, I soon came to the
						realization that the traditional education path wasn't my calling.
						Instead, I felt an irresistible pull towards a different kind of
						learning - one that involved nurturing my passion from the comfort
						of my home. I submerged myself in the captivating world of coding,
						and it was there that I found my true calling, morphing into a
						proficient frontend developer and, eventually, a CEO. From the
						moment I breathed life into my first idea and nurtured it into
						reality, I knew I was on the right track. That initial project not
						only resulted in a substantial financial reward but also solidified
						my passion for web development. Since building my first website back
						in 2011, my admiration for the infinite possibilities the web offers
						both consumers and professionals has remained undiminished. I find
						immense satisfaction in delivering high-quality builds that not only
						fulfill the client's needs but also bring a sense of personal
						gratification. The thrill of overcoming developmental challenges
						never ceases to exhilarate me, especially when it comes to upholding
						web standards, ensuring accessibility, crafting semantic code,
						enhancing user experience, and implementing website best practices.
						I am in constant pursuit of refining my craft and adhering to the
						principles that make a website truly exceptional.
					</Paragraph>
				</Col>
			</Row>
		</Grid>
	</React.Fragment>
);

export default About;
