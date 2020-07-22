import React from 'react';

import { Col, Card } from 'react-bootstrap/';

import bird from '../assets/images/birds.jpg';

class CardCols extends React.Component {

  render() {
    return (
            <>
                <Col md={3} sm={6}>
                  <Card style={{width: '16rem' }} className="ml-auto">
                    <Card.Img variant="top" src={bird} className="card-img" />
                    <Card.Body>
                      <Card.Title>Bird.</Card.Title>
                      <Card.Text>This is a bird.</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} sm={6}>
                  <Card style={{width: '16rem' }} className="ml-auto" >
                    <Card.Img variant="top" src={bird} className="card-img" />
                    <Card.Body>
                      <Card.Title>Bird.</Card.Title>
                      <Card.Text>This is a bird.</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} sm={6}>
                  <Card style={{width: '16rem' }} className="ml-auto">
                    <Card.Img variant="top" src={bird} className="card-img" />
                    <Card.Body>
                      <Card.Title>Bird.</Card.Title>
                      <Card.Text>This is a bird.</Card.Text>

                    </Card.Body>
                  </Card>
                </Col>
            </>
    );
  }
}


export default CardCols;
