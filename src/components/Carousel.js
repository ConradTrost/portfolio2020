import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from './Card';
import neoo from '../assets/images/space.jpg';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Nothing',
                    subTitle: 'Something',
                    imgSrc: neoo,
                    link: 'https://github.com/retro1967/motor-services',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Nothing',
                    subTitle: 'Something',
                    imgSrc: neoo,
                    link: 'https://github.com/retro1967/motor-services',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Nothing',
                    subTitle: 'Something',
                    imgSrc: neoo,
                    link: 'https://github.com/retro1967/motor-services',
                    selected: false
                }
            ]
        }
    }

    handleCardHover = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardHover(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;