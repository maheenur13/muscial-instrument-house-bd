import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import { useParams } from 'react-router';
import { Table } from 'react-bootstrap'
import Navigationbar from '../Home/Navigationbar/Navigationbar';
import PaymentCardBox from '../Dashboard/PaymentCardBox/PaymentCardBox';
import { Elements } from '@stripe/react-stripe-js';
import Spinner from 'react-bootstrap/Spinner'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe("pk_test_51IeNLRLDDKKbKSIyViGtdDHnhxruSjjtVmIhTk2LNomjXtgQlYsaWWeomQqHU2geHBnZGICGl6NbUn9FgIJOJkQx00TVuvByKM");
const SingleProduct = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addInstruments')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])
    const item = products.find(product => product._id === id);
    return (
        <div>
            <Navigationbar></Navigationbar>
            <h1 className="text-center mt-5">Pay To Buy Your Item</h1>
            <div className=" m-5 ">
                <h2 className="text-white text-center p-3">Booking Information</h2>
                    {item?<Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Your Name</th>
                                <th>Item</th>
                                <th>Model</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{loggedInUser.displayName}</td>
                                    <td>{item?.name}</td>
                                    <td>{item?.model}</td>
                                    <td>{item?.price}</td>
                                </tr>
                            </tbody>
                       
                    </Table>:
                    <div className=" d-flex flex-column justify-content-center align-items-center mt-3 mb-4">
                        <h3 className="text-center mb-4 ">Please Wait</h3>
                    <Spinner className="m-auto " animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  </div>
                    }
                    <Elements  stripe={stripePromise}>
                <PaymentCardBox bookingName={item?.name} price={item?.price} key={id}></PaymentCardBox>
            </Elements>
                   
                </div>
        </div>
    );
};

export default SingleProduct;