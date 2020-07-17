import React from 'react';

import { Jumbotron, Container, Row, Col } from 'react-bootstrap/';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h2 className="display-3 font-weight-bolder">{props.title}</h2> }
                        { props.subTitle && <h4 className="display-4 font-weight-light">{props.subTitle}</h4> }
                        { props.text && <h4 className="lead font-weight-light">{props.text}</h4> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;