import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import image1 from '../../../img/homeBg/News/komol.jpg'
const Review = ({review}) => {
    return (
        <div>
            <CardDeck className="container m-auto">
                    <Card>
                        <Card.Img variant="top"  src={image1} />
                        <Card.Body>
                            <Card.Title>{review.name}</Card.Title>
                            <Card.Text>
                                {review.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{review.status}</small>
                        </Card.Footer>
                    </Card>
                   
                </CardDeck>
        </div>
    );
};

export default Review;