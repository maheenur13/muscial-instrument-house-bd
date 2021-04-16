import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navigationbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../../../App';

const Navigationbar = () => {
  const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const {name,photoURL}= loggedInUser;
    console.log('loggedinuser ',loggedInUser)
    console.log('name',name);
  return (
    <Navbar  className="navigation-design" collapseOnSelect expand="lg">
      <Navbar.Brand className="text-white" href="#home">React-Bootstrap</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      {name && <p className="text-success  mt-2 pt-1 pb-1 pl-2 pr-2 border border-success">{name}</p>}
        <Nav className="ml-auto">
          
          <Link  to="/home" className="text-white  mr-5">Home</Link>
          <Link to="/about" className="text-white mr-5">About Us</Link>
          <Link to="/dashboard/bookinglists" className="text-white mr-5">Dashboard</Link>
          <Link to="/contact" className="text-white mr-5">Contact</Link>
          {!name?<Link to="/login" className="text-white mr-5">Login</Link>
          :
          <Link to="/login" className="text-white mr-5" onClick={()=>setLoggedInUser({})}>Logout</Link>
          }

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;