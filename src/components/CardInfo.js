import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: {opacity: 0} })

    return(
        <animated.div className="c-card-info" style={style}>
            <p className="c-card-title">{props.title}</p>
            <p className="c-card-subtitle">{props.subTitle}</p>
            <a href={props.text} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default CardInfo;