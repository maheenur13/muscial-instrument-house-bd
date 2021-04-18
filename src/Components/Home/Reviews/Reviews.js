import React, { useEffect, useState } from 'react';
import Review from './Review';
import { CardDeck, Card } from 'react-bootstrap';
const Reviews = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addReviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data);
        })
    },[])
    return (
        <section  style={{backgroundColor:'white',padding:'30px'}}>
            <div >
                <h1 className="text-center pb-4">Reviews</h1>
                <CardDeck className="container m-auto ">
                {
                    reviews.map(review=><Review review={review} key={review._id}></Review>)
                }
                </CardDeck>
            </div>
        </section>
    );
};

export default Reviews;