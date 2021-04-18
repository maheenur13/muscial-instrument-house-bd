import React, { useContext } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { userContext } from '../../../App';
import image1 from '../../../img/homeBg/News/komol.jpg'
const Review = ({ review }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        
            <div className=" m-auto">
                <Card style={{ width: '300px', height: '300px' }}>
                    <Card.Img variant="top" style={{ width: '90px', borderRadius: '50%', margin: 'auto', marginTop: '15px' }} src={review.image} />
                    <Card.Body>
                        <Card.Title className="text-center">{review.name}</Card.Title>
                        <Card.Text className="text-center">
                            {review.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{review.status}</small>
                    </Card.Footer>
                </Card>

            </div>

    );
};

export default Review;