import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './Card.css'

const MovieCard = (props) => {
    return (
        <Card>
            <CardImg top width="100%" src={props.imgUrl} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle><b>{props.year}</b></CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default MovieCard;