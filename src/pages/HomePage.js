import React from 'react';

import { Jumbotron, Col, Row, Button, Card } from 'react-bootstrap/';
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';

import Box from '../components/Box';
import HomeCarousel from '../components/Home-Carousel';
import bird from '../assets/images/birds.jpg';
import Footer from '../components/Footer';

class HomePage extends React.Component {

  render() {

    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true
    };

    return (
        <>
          <ScrollToTopOnMount />
          <SectionsContainer {...options} >
            <Section>
              <Jumbotron className="jumbotron jumbotron-fluid">
                <Row>
                  <Col sm={12} md={6}>
                    <div className="left-column">
                      {/* <h2 className="centered-jumbo ml-auto display-3">Quality Website Creation</h2> */}
                      <div className="display-upper">
                        <h3 className=" display-4 subTitle">Full Stack Web Developer.</h3>
                        <p className="lead tertiary">Creative designer, using contrasting colors and modern design to create front-end code that pops.</p>
                        <p className="lead tertiary">Experience with React, HTML, CSS, JavaScript, Bootstrap.</p>
                        <div className="btn-div">
                          <Button className="hire-btn" variant="outline-dark" size="lg" href="/services" block>Get in Touch!</Button>
                        </div>
                      </div>
                      <div className="display-lower">
                        <p className="lead tertiary">Back-end architect, creating sturdy server-side databases.</p>
                        <p className="lead tertiary">Experience with Node.js, MongoDB, Express.js.</p>
                        <div className="btn-div btn-div-right">
                          <Button className="hire-btn hire-btn-right" variant="outline-dark" size="lg" href="/services" block>Resumé</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col className="carousel-col" sm={12} md={6}>
                    {/* <Box /> */}
                    <HomeCarousel />
                  </Col>
                </Row>

              </Jumbotron>
            </Section>
            
            <Section className="idkyet">
              <Row >
                <Col></Col>
                <Col><h1 className="justify-content-centered display-4 ml-auto second-header">What Sets Me Apart?</h1></Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <Card bg={'dark'} style={{width: '16rem' }} className="ml-auto">
                    <Card.Img variant="top" src={bird} className="card-img" />
                    <Card.Body>
                      <Card.Title>Bird.</Card.Title>
                      <Card.Text>This is a bird.</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                  <Card bg={'dark'} style={{width: '16rem' }} className="ml-auto" >
                    <Card.Img variant="top" src={bird} className="card-img" />
                    <Card.Body>
                      <Card.Title>Bird.</Card.Title>
                      <Card.Text>This is a bird.</Card.Text>

                    </Card.Body>
                  </Card>
                <Col>
                  <Card bg={'dark'} style={{width: '16rem' }} className="ml-auto">
                    <Card.Img variant="top" src={bird} className="card-img" />
                    <Card.Body>
                      <Card.Title>Bird.</Card.Title>
                      <Card.Text>This is a bird.</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                </Col>
              </Row>

              <Footer />
            </Section>

          </SectionsContainer>
        </>
    );
  }
}


export default HomePage;
