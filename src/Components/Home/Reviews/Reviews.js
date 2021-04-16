import React, { useEffect, useState } from 'react';
import Review from './Review';

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
        <section className="review-section border pt-5 pb-5" style={{backgroundColor:'white'}}>
            <div>
                <h1 className="text-center pb-4">Reviews</h1>
                {
                    reviews.map(review=><Review review={review} key={review._id}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;