import React, { useContext, useEffect, useState } from 'react';
import fixGuitar from '../../../img/icons/guitar.png';
import {Table} from 'react-bootstrap'
import { userContext } from '../../../App';
const BookingLists = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [bookingList,setBookingList]=useState([]);
    console.log('booking info',bookingList);
    console.log()
    useEffect(()=>{
        fetch('http://localhost:5000/loadBooking',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log('data',data)
            // console.log('data',data[0].phone)
            setBookingList(data);
        })
    },[loggedInUser.email])
let count =1;
    return (
        <div className="mt-3">
            <h1 className="text-white text-center p-3">All Bookings</h1>
          <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Your Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Booking Name</th>
      <th>Price</th>
      <th>Booking Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
{
    bookingList.map(booking=> <tr><td>{count++}</td>
        <td>{booking.displayName}</td>
        <td>{booking.phone}</td>
        <td>{booking.email}</td>
        <td>{booking.bookingName}</td>
        <td>{booking.price}</td>
        <td>{booking.bookingDate}</td>
        <td>
          <select className="p-1">
            <option className="">Pending</option>
            <option className="text-success border border-success p-1">Accept</option>
            <option className="text-danger">Decline</option>
          </select>
        </td>
        </tr>)
}
    
    
  </tbody>
</Table>
        </div>
    );
};

export default BookingLists;