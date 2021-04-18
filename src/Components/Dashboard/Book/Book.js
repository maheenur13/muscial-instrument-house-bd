import React, { useContext, useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import { useParams } from 'react-router';
import PaymentCardBox from '../PaymentCardBox/PaymentCardBox';
import { Table } from 'react-bootstrap'
import { userContext } from '../../../App';
const stripePromise = loadStripe("pk_test_51IeNLRLDDKKbKSIyViGtdDHnhxruSjjtVmIhTk2LNomjXtgQlYsaWWeomQqHU2geHBnZGICGl6NbUn9FgIJOJkQx00TVuvByKM");

const Book = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addNewService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [id])
    const booking = services.find(service => service._id === id);
    // console.log('all bokkin',booking);
    // const {name,price}=booking;
    // console.log('id is', id);
    
    return (
        <div className="mt-5 mb-5">
            {booking ?<div className="d-flex flex-wrap justify-content-around align-items-center" style={{marginTop:''}}>
               
                <div className="col-md-3 border">
                <h2 className="text-white text-center p-3">Booking Information</h2>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Your Name</th>
                                <th>Booking</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{loggedInUser.displayName}</td>
                                    <td>{booking?.name}</td>
                                    <td>{booking?.price}</td>
                                </tr>
                            </tbody>
                       
                    </Table>
                   
                </div>
            
            <div className="col-md-5">
            <Elements  stripe={stripePromise}>
                <PaymentCardBox bookingName={booking?.name} price={booking?.price} key={id}></PaymentCardBox>
            </Elements>
            </div>
            </div>:
            <h2 className="text-white text-center">Sorry! You Dont Have Any Booking!</h2>
            }
        </div>
    );
};

export default Book;