import React, { useEffect, useState } from 'react';
import './Services.css';
import { Button } from 'react-bootstrap';
import fixGuitar from '../../../img/icons/guitar.png';
import Service from './Service';
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addNewService')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServices(data)})

    },[])
    return (
        <section className="services-design pb-5">
            <h1 className="bg-white text-center pt-4 pb-4">our services</h1>
            <div className=" w-75 m-auto">
                <div className="w-75 p-3 m-auto d-flex justify-content-around align-items-center flex-wrap">

                   { 
                        services.map(service=><Service service={service} key={service._id}></Service>)
                   }
                   
                    
                </div>
            </div>
        </section>
    );
};

export default Services;