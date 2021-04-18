import React from 'react';
import image1 from '../../../img/homeBg/News/komol.jpg';
import image2 from '../../../img/homeBg/News/linkon.jpg';
import image3 from '../../../img/homeBg/News/oni.jpg';
import image4 from '../../../img/homeBg/News/sumon.jpg';
import './NewsAndArticle.css';
import { Card, Button, CardGroup,CardDeck } from 'react-bootstrap';

const newsAndArticles=[
    {
        image:image1,
        title:'What Komol Bhai said?',
        description:`This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.`
    },
    {
        image:image2,
        title:'Linkon Bhai The Greatest Musician Of Bangladesh!',
        description:`This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.`
    },
    {
        image:image3,
        title:'Oni Hasan The Best Guitarist From Banglades!',
        description:`This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.`
    },
    {
        image:image4,
        title:'Bass Baba Doing well!',
        description:`This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.`
    },
]
const NewsAndArticle = () => {
    return (
        <section className=" news-article-design pt-5 pb-5">
            <h1 className="text-center mb-5">News</h1>
                <div className="m-auto w-75 d-flex justify-content-around around-items-center flex-wrap" >
                    {
                        newsAndArticles.map(article=>
                        <Card style={{width:'300px'}} className=" card-design">
                        <Card.Img style={{width:'100%'}} variant="top" src={article.image} />
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text>
                                {article.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <button className="w-100 button-design">View Full Article</button>
                        </Card.Footer>
                    </Card>)
                    }
                    
                </div>
        </section>
    );
};

export default NewsAndArticle;