import React from 'react';
import fixGuitar from '../../../img/icons/guitar.png';
const BookingLists = () => {
    return (
        <div>
           <div  className="border text-white">
               <div>
                   <img style={{width: '200px'}} src={fixGuitar} alt=""/>
                   <select>
                       <option>Pending</option>
                       <option>Accepted</option>
                   </select>
               </div>
               <div>
                   <h3>Fix your guitar</h3>
                   <p>Your application is pendding. Please wait</p>
               </div>
           </div>
        </div>
    );
};

export default BookingLists;