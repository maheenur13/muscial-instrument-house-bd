import React from 'react';
import { ProSidebar, SidebarFooter, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
// import GoToHome from '../../GoTOHome/GoTOHome';
const Sidebar = () => {
    return (
        <div>
            <ProSidebar style={{height:'100vh',width:'100%',left:'0',position:'absolute'}}>
                <SidebarHeader  className="p-3" >
                  <Link to='/'>Home</Link>
                </SidebarHeader>
                <Menu  iconShape="square">
                    <MenuItem icon="ok">
                        <Link  to="/dashboard/book">Book</Link> 
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link to="/dashboard/bookinglists">Booking List</Link>
                        </MenuItem>
                    <MenuItem icon="ok">
                        <Link to="/dashboard/review">Review</Link>
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