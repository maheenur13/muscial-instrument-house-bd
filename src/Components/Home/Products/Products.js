import React from 'react';
import image1 from '../../../img/homeBg/guitars/guitar1.jpg'
import image2 from '../../../img/homeBg/guitars/guitar2.jpg'
import image3 from '../../../img/homeBg/guitars/guitar3.jpg';
import image4 from '../../../img/homeBg/guitars/amps.jpg'
import image5 from '../../../img/homeBg/guitars/piano.jpg'
import './Products.css';
import {Button } from 'react-bootstrap';
const Products = () => {
    return (
        <section style={{ backgroundColor: 'white' }} className="pb-5">
            <div className=" container d-flex flex-column">

                <h1 className="text-center p-5">Our Products</h1>
            <div className="d-flex justify-content-around align-items-center flex-wrap">
                <div className="mt-5">
                    <h3 className="text-center">Acoustic Guitars</h3>
                    <img src={image1} alt="" />
                </div>
                <div className="mt-5">
                    <h3 className="text-center">Electric Guitars</h3>
                    <img src={image2} alt="" />

                </div>
                <div className="mt-5">
                    <h3 className="text-center">Bass Guitars</h3>
                    <img  src={image3} alt="" />

                </div>
                <div className="mt-5">
                    <h3 className="text-center">Amps</h3>
                    <img  src={image4} alt="" />

                </div>
                
                </div>
                <Button className="m-auto" style={{width:'150px'}}  variant="warning">View All</Button>
            </div>

        </section>
    );
};

export default Products;