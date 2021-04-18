import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { ProSidebar, SidebarFooter, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
// import GoToHome from '../../GoTOHome/GoTOHome';
const Sidebar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const [isAdmin,setIsAdmin]=useState(false);
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
            
            console.log('is Admin',isAdmin);
        })
    },[])
    const handleClick=(e)=>{
        console.log(e.target.innerText);
        
        // e.target.style.color= 'yellow';
    }
    return (
        <div>
            <ProSidebar  style={{height:'100vh',width:'100%',left:'0',position:'absolute'}}>
                <Menu  iconShape="square">
                    {!isAdmin &&<MenuItem icon="ok">
                        <Link className="text-warning" onClick={handleClick}  to="/dashboard/book">Book</Link> 
                        </MenuItem>}
                    <MenuItem icon="ok">
                        <Link onClick={handleClick} to="/dashboard/bookinglists">Booking List</Link>
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link  to="/dashboard/orderlist">Order List</Link>
                        </MenuItem>
                    {!isAdmin && <MenuItem icon="ok">
                        <Link onClick={handleClick} to="/dashboard/review">Review</Link>
                        </MenuItem>}
                    {isAdmin && <MenuItem icon="ok">
                        <Link  to="/dashboard/makeadmin">Make Admin</Link>
                        </MenuItem>}
                    {isAdmin &&<MenuItem icon="ok">
                       <Link to="/dashboard/addservices">Add Services</Link>
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