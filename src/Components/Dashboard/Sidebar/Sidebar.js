import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { ProSidebar, SidebarFooter, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import { isAdminContext } from '../Dashboard/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList,faBookmark,faSearchDollar,faMarker,faUserPlus,faEdit,faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const [isAdmin, setIsAdmin]=useContext(isAdminContext);

    useEffect(()=>{
        fetch('http://localhost:5000/isAdmin',{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
              setIsAdmin(true);
            }
            
            // console.log('is Admin',isAdmin);
        })
    },[])

    return (
        <div>
            
            <ProSidebar  style={{height:'100vh',width:'100%',left:'0',position:'absolute'}}>
                <Menu  iconShape="square">
                    {!isAdmin &&<MenuItem icon={<FontAwesomeIcon icon={faBookmark}/>}>
                       <Link   to="/dashboard/book">Book</Link>
                        </MenuItem>}
                    <MenuItem icon={<FontAwesomeIcon icon={faClipboardList}/>}>
                        <Link to="/dashboard/bookinglists">Booking List</Link>    
                        </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faClipboardList}/>}>
                        <Link  to="/dashboard/orderlist">Order List</Link>
                        </MenuItem>
                    {!isAdmin && <MenuItem icon={<FontAwesomeIcon icon={faSearchDollar}/>}>
                        <Link  to="/dashboard/review">Review</Link>
                        </MenuItem>}
                    {isAdmin && <MenuItem icon={<FontAwesomeIcon icon={faUserPlus}/>}>
                        <Link  to="/dashboard/makeadmin">Make Admin</Link>
                        </MenuItem>}
                    {isAdmin &&<MenuItem icon={<FontAwesomeIcon icon={faMarker}/>}>
                       <Link to="/dashboard/addservices">Add Services</Link>
                        </MenuItem>}
                    {isAdmin &&<MenuItem icon={<FontAwesomeIcon icon={faEdit}/>}>
                       <Link to="/dashboard/updateServices">Update Services</Link>
                        </MenuItem>}
                    {isAdmin &&<MenuItem icon={<FontAwesomeIcon icon={faPuzzlePiece}/>}>
                       <Link to="/dashboard/instruments">Add Instruments</Link>
                        </MenuItem>}
                    
                </Menu>
                <SidebarFooter className="mt-auto pb-3 pt-3">
                    <Link to="logout" className=" text-center d-block">Log Out</Link>
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;