import React from 'react';
import image1 from '../../../img/homeBg/guitars/guitar1.jpg'
import image2 from '../../../img/homeBg/guitars/guitar2.jpg'
import image3 from '../../../img/homeBg/guitars/guitar3.jpg';
import image4 from '../../../img/homeBg/guitars/amps.jpg'
import image5 from '../../../img/homeBg/guitars/piano.jpg'
import './Products.css';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const productsCollection =  [
    {
        id:1,
        title: 'Acoustic Guitar',
        image: image1
    },
    {
        id:2,
        title: 'Electric Guitar',
        image: image2
    },
    {
        id:3,
        title: 'Bass Guitar',
        image: image3
    },
    {
        id:4,
        title: 'Amplifier',
        image: image4
    },
]
const Products = () => {
    return (
        <section style={{ backgroundColor: 'white' }} className="pb-5 pr-3 pl-3">
            <div className=" container d-flex flex-column">

                <h1 className="text-center p-5">Our Products</h1>
            
               <div className="d-flex justify-content-around align-items-center flex-wrap mb-5">
                {
                    productsCollection.map(product=><div key={product.id}>
                        <div className="mt-5 mb-4">
                            <h3 className="text-center">{product.title}</h3>
                            <img className="image-style" style={{width:'380px'}} src={product.image} alt="" />
                        </div>
                    </div>)
                }
                </div>
                <Link to='/allProducts' className="m-auto button-design text-center" style={{ width: '150px' }} variant="warning">View All</Link>
            </div>

        </section>
    );
};

export default Products;