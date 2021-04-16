import React from 'react';
import image1 from '../../../img/homeBg/News/komol.jpg';
import image2 from '../../../img/homeBg/News/linkon.jpg';
import image3 from '../../../img/homeBg/News/oni.jpg';
import './NewsAndArticle.css';
import { Card, Button, CardGroup,CardDeck } from 'react-bootstrap';
const NewsAndArticle = () => {
    return (
        <section className="news-article-design pt-5 pb-5">
            <div className="w-75 m-auto">
                <CardDeck>
                    <Card className=" shadow-sm">
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button className="w-100" variant="primary">Go somewhere</Button>
                        </Card.Footer>
                    </Card>
                    <Card className=" shadow-sm">
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button className="w-100" variant="primary">Go somewhere</Button>
                        </Card.Footer>
                    </Card>
                    <Card className="shadow-sm">
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <Button className="w-100" variant="primary">Go somewhere</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </section>
    );
};

export default NewsAndArticle;