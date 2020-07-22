import React from 'react';
import { Carousel } from 'react-bootstrap';

import bird from '../assets/images/birds.jpg';

class HomeCarousel extends React.Component {
    render() {
        return(
            <Carousel className="right-column" interval={3000} keyboard={false} >
                <Carousel.Item>
                    <img className="d-block w-100" src={bird} alt={bird} />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bird} alt={bird} />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bird} alt={bird} />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default HomeCarousel;