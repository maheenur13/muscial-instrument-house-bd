import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Home/Footer/Footer';
import Navigationbar from '../Home/Navigationbar/Navigationbar';
const ServiceClaimed = () => {
    const {id} = useParams();
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addServices/'+id)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <Navigationbar></Navigationbar>
            <h1>this is </h1>
            <Footer></Footer>
        </div>
    );
};

export default ServiceClaimed;