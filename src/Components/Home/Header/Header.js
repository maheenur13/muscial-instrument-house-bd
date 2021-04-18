import React from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import bg1 from '../../../img/homeBg/bg-1.jpg'
import bg2 from '../../../img/homeBg/bg-2.jpg';
import bg3 from '../../../img/homeBg/bg-3.jpg';
import bg4 from '../../../img/homeBg/bg-4.jpg';
import bg5 from '../../../img/homeBg/bg-5.jpg';
import './Header.css';
const Header = () => {
    return (
        <header style={{position:'relative'}}>
            <Navigationbar></Navigationbar>
            <div className="carousel-container">
                <Carousel fade>
                    
                    <Carousel.Item interval={800}>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg4}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <div className="caption-box">
                            <h3 className="" style={{textAlign:'center'}}>Musical Instruments House BD</h3>
                            <p style={{textAlign:'justify'}}>A musical instrument is used to make musical sounds. Once humans moved from making sounds with their bodies..</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1600}>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        <div className="caption-box">
                            <h3 className="" style={{textAlign:'center'}}>Musical Instruments House BD</h3>
                            <p style={{textAlign:'justify'}}>A musical instrument is used to make musical sounds. Once humans moved from making sounds with their bodies.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1300}>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        <div className="caption-box">
                            <h3 className="" style={{textAlign:'center'}}>Musical Instruments House BD</h3>
                            <p style={{textAlign:'justify'}}>A musical instrument is used to make musical sounds. Once humans moved from making sounds with their bodies.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 bg-image-style"
                            src={bg5}
                            alt="Third slide"
                        />
                       <Carousel.Caption>
                        <div className="caption-box">
                            <h3 className="" style={{textAlign:'center'}}>Musical Instruments House BD</h3>
                            <p style={{textAlign:'justify'}}>A musical instrument is used to make musical sounds. Once humans moved from making sounds with their bodies.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </header>
    );
};

export default Header;