import React, { useContext, useEffect, useState } from 'react';
import {Table} from 'react-bootstrap'
import { userContext } from '../../../App';
import { isAdminContext } from '../Dashboard/Dashboard';
const BookingLists = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [bookingList,setBookingList]=useState([]);
    const [isAdmin, setIsAdmin]=useContext(isAdminContext);
    const [status,setStatus] = useState({});
    // console.log('booking info',bookingList);
    // console.log()
    useEffect(()=>{
        fetch('http://localhost:5000/loadBooking',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>{
            
            // console.log('data',data)
            // console.log('data',data[0].phone)
            setBookingList(data);
        })
    },[loggedInUser.email])
let count =1;


const onChangeOptions =(e)=>{
  console.log(e.target.value)
  console.log(e.target.id)
  const id= e.target.id;
  status.currentStatus = e.target.value;
  status.id = id;
  console.log(status)
  console.log(bookingList);
  fetch('http://localhost:5000/updateStatus/'+id,{
    method:'PATCH',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(status)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  })
    // console.log('current status',bookingList);
}
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
          {isAdmin?<select  className="p-1" onChange={onChangeOptions} id={booking._id} defaultValue={booking.currentStatus} >
            <option  className="text-warning" value="Pending">Pending</option>
            <option value="Accepted" className="text-success border border-success p-1">Accept</option>
            <option value="Declined" className="text-danger">Decline</option>
          </select>:
          <p>{booking.currentStatus}</p>
          }
        </td>
        </tr>)
}
    
    
  </tbody>
</Table>
        </div>
    );
};

export default BookingLists;