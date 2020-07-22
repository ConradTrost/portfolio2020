import React from 'react';

import { Jumbotron, Col, Row, Button } from 'react-bootstrap/';
import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';

import HomeCarousel from '../components/Home-Carousel';
import Footer from '../components/Footer';
import CardCols from '../components/Card';
import profPhoto from '../assets/images/prof-img.png';

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
                  <Col sm={12} md={7}>
                    <div className="left-column">
                      <div className="left-column-inner">
                        {/* <h2 className="centered-jumbo ml-auto display-3">Quality Website Creation</h2> */}
                          <div className="display-upper">
                            <p className="lead tertiary">Who am I?</p>
                            {/* <h3 className=" display-4 subTitle">A Passion of Mine</h3> */}
                            <h3 className=" display-4 subTitle">I am a full-stack web developer based out of Dallas, Texas.</h3>
                            {/* <p className="lead tertiary">Creative designer, using contrasting colors and modern design to create front-end code that pops.</p> */}
                            <p className="lead tertiary thinner">I find passion in seeing results from lines of words and characters.</p>
                            <p className="lead tertiary thinner">Experience with React, HTML, CSS, JavaScript, Bootstrap.</p>
                            {/* <div className="btn-div">
                              <Button className="hire-btn" variant="outline-dark" size="lg" href="/services" block>Get in Touch!</Button>
                            </div> */}
                          </div>
                          <div className="display-lower">
                            <p className="lead tertiary thinner">Back-end architect, creating sturdy server-side databases.</p>
                            <p className="lead tertiary thinner">Experience with Node.js, MongoDB, Express.js.</p>
                            {/* <div className="btn-div btn-div-right">
                              <Button className="hire-btn hire-btn-right" variant="outline-dark" size="lg" href="/services" block>Resumé</Button>
                            </div> */}
                          </div>
                        </div>
                    </div>
                  </Col>
                  <Col className="carousel-col" sm={12} md={5}>
                    {/* <Box /> */}
                    {/* <HomeCarousel /> */}
                    <img className="prof-img" src={profPhoto} alt={profPhoto}></img>
                  </Col>
                </Row>
                <a href="#sectionTwo" className="chevron-a"><i className="fas fa-chevron-down"></i></a>
              </Jumbotron>
            </Section>
            
            <Section className="idkyet">
              <Row>
                <Col></Col>
                <Col><h1 className="justify-content-centered display-4 ml-auto second-header tertiary">What Sets Me Apart?</h1></Col>
                <Col></Col>
              </Row>
              <Row className="card-columns" >
                <CardCols />
              </Row>

              <Footer />
            </Section>

          </SectionsContainer>
        </>
    );
  }
}


export default HomePage;
