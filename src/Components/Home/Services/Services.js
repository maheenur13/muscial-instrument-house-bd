import React from 'react';
import './Services.css';
import { Button } from 'react-bootstrap';
import fixGuitar from '../../../img/icons/guitar.png';
const Services = () => {
    return (
        <section className="services-design pb-5">
            <h1 className="bg-white text-center pt-4 pb-4">our services</h1>
            <div>
                <h1 className="text-center text-white border w-25 m-auto pt-2 pb-3">Fix your guitar?</h1>

                <div className="w-75 p-3 m-auto d-flex justify-content-around align-items-center">

                    <div style={{border:'4px solid white'}} className="text-white  d-flex flex-column justify-content-center align-items-center p-3">
                        <h3 className="pb-2">Fix Your Guitar Now!</h3>
                        <img style={{height:'200px',width:'200px'}} src={fixGuitar} alt="" />
                        <Button className="mt-3" variant="warning"> Click To Call</Button>
                    </div>
                    <div style={{border:'4px solid white'}} className="text-white  d-flex flex-column justify-content-center align-items-center p-3">
                        <h3  className="pb-2">Fix Your Guitar Now!</h3>
                        <img style={{height:'200px',width:'200px'}} src={fixGuitar} alt="" />
                        <Button className="mt-3" variant="warning"> Click To Call</Button>
                    </div>
                    <div style={{border:'4px solid white'}} className="text-white  d-flex flex-column justify-content-center align-items-center p-3">
                        <h3  className="pb-2">Fix Your Guitar Now!</h3>
                        <img style={{height:'200px',width:'200px'}} src={fixGuitar} alt="" />
                        <Button className="mt-3" variant="warning"> Click To Call</Button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Services;