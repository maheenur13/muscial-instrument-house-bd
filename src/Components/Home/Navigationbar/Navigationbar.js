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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navigationbar = () => {
  // faUserCircle
  const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const {name,photoURL}= loggedInUser;
    console.log('loggedinuser ',loggedInUser)
    // console.log('name',name);
    const logOutHandler = () =>{
      sessionStorage.clear();
      setLoggedInUser({});
    }
  return (
    <Navbar  className="navigation-design" collapseOnSelect expand="lg">
      <Navbar.Brand className="text-white" href="#home">BD-MUSIC-INSTRUMENT-HOUSE</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
     
        <Nav className="ml-auto d-flex justify-content-center align-items-center">
        {name &&<NavDropdown style={{backgroundColor:'white',marginRight:'30px'}} title={<FontAwesomeIcon className="m-auto" icon={faUserCircle}/>} id="basic-nav-dropdown">
          <NavDropdown.Item  className="dropdown-item">{name}</NavDropdown.Item>
        
      </NavDropdown>
      }
          <Link  to="/home" className="text-white  mr-5">Home</Link>
          <Link to="/about" className="text-white mr-5">About Us</Link>
          <Link to="/dashboard/bookinglists" className="text-white mr-5">Dashboard</Link>
          <Link to="/contact" className="text-white mr-5">Contact</Link>
          {!name?<Link to="/login" style={{backgroundColor:'green',padding:'3px 10px 3px 10px'}} className="text-white mr-5">Login</Link>
          :
          <Link to="/login" style={{backgroundColor:'red',padding:'3px 10px 3px 10px'}} className="text-white mr-5" onClick={logOutHandler}>Logout</Link>
          }
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;