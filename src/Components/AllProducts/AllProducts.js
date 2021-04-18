import React, { useEffect, useState } from 'react';
import Navigationbar from '../Home/Navigationbar/Navigationbar';
import Product from './Product';
import Footer from '../Home/Footer/Footer';
const AllProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addInstruments')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data)})

    },[])
    return (
        <div>
            <Navigationbar></Navigationbar>
            <h1>All products</h1>
            <div className="d-flex justify-content-around align-items-center flex-wrap m-4">
                {
                    products.map(product=><Product product={product} key={product._id} ></Product>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;