import React from 'react';
import { Router } from 'react-router-dom';
import MeTwo from './images/profile.jpg';
import Header from './layout/Header';
import Img from './components/Img';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Navigation from './components/Navigation';
import history from './history';


const App = () => {
  return (
    <Router history={history}>
      <Header>
        <Grid>
          <Row middle="xs" center="xs" start="lg">
            <Col xs={12} lg={8} >
              <Img src={MeTwo} sizeX="102px" style={{borderRadius: '50%', cursor: 'pointer'}} onClick={() => history.push('/')} />
            </Col>
            <Col xs={12} lg={4}>
              <Navigation />
            </Col>
          </Row>
        </Grid>
      </Header>
        <Content />
      <Footer />
    </Router>
  );
}

export default App;
