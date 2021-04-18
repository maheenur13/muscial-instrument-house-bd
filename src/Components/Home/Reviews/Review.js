import React, { useContext } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import { userContext } from '../../../App';
import image1 from '../../../img/homeBg/News/komol.jpg'
const Review = ({review}) => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    return (  
                    <Card className="w-25">
                        <Card.Img variant="top" style={{width:'90px',borderRadius:'50%',margin:'auto',marginTop:'15px'}}  src={review.image} />
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
                   
                
       
    );
};

export default Review;