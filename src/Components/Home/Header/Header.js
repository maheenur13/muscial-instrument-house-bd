import React from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import bg1 from '../../../img/homeBg/bg-1.jpg'
import bg2 from '../../../img/homeBg/bg-2.jpg';
import bg3 from '../../../img/homeBg/bg-3.jpg';
import bg4 from '../../../img/homeBg/bg-4.jpg';
import bg5 from '../../../img/homeBg/drums.jpg';
import './Header.css';
const Header = () => {
    return (
        <header>
            <Navigationbar></Navigationbar>
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item interval={1200}>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg1}
                            alt="First slide"
                        />
                        
                        <Carousel.Caption className="carousel-caption">
                            <div className="caption-box">
                            <h1 className="" style={{textAlign:'center'}}>Musical Instruments House BD</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1600}>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1300}>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg5}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </header>
    );
};

export default Header;