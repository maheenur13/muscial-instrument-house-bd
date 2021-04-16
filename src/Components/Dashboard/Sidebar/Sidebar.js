import React, { useState } from 'react';
import { ProSidebar, SidebarFooter, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
// import GoToHome from '../../GoTOHome/GoTOHome';
const Sidebar = () => {
    const [linkActive,setLinkActive]=useState(false);
    const handleClick=(e)=>{
        e.target.style.color= 'yellow';
    }
    return (
        <div>
            <ProSidebar style={{height:'100vh',width:'100%',left:'0',position:'absolute'}}>
                <SidebarHeader  className="p-3" >
                  <a href='/'>Home</a>
                </SidebarHeader>
                <Menu  iconShape="square">
                    <MenuItem icon="ok">
                        <Link onClick={handleClick}  to="/dashboard/book">Book</Link> 
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link to="/dashboard/bookinglists">Booking List</Link>
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link onClick={handleClick} to="/dashboard/orderlist">Order List</Link>
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link to="/dashboard/review">Review</Link>
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link to="/dashboard/makeadmin">Make Admin</Link>
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link to="/dashboard/addservices">Add Services</Link>
                        </MenuItem>
                    
                </Menu>
                <SidebarFooter className="mt-auto pb-3 pt-3">
                    <Link to="logout" className=" text-center d-block">Log Out</Link>
                </SidebarFooter>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;