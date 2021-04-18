import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookSquare,faInstagramSquare,faTwitterSquare} from '@fortawesome/free-solid-svg-icons'
import Fb from '../../../img/icons/fb.svg';
import Insta from '../../../img/icons/insta.svg';
import Twitt from '../../../img/icons/twit.svg';
const Footer = () => {
    return (
        <footer className="footer p-3">
        <div className="row m-5">
            <div className="col-md-3">
            <h5 style={{color:'#1CC7C1'}}>Musicians</h5>
            </div>
            <div className="col-md-3">
                <h5 style={{color:'#1CC7C1'}}>Services</h5>
            </div>
            <div className="col-md-3">
                <h5 style={{color:'#1CC7C1'}}>News and Blogs</h5>
            </div>
            <div className="col-md-3">
                <h5 style={{color:'#1CC7C1'}}>Find Us On Social</h5>
            </div>
        </div>
        <div className="row m-5 ">
            <div className="col-md-3 d-flex flex-column footer-items">
               <Link to="/emergency">Linkon</Link>
               <Link to="/cehckup">Tahsan</Link>
               <Link to="/treatment">Minar</Link>
               <Link to="/treatment">Tuhin</Link>
               <Link to="/treatment">BassBaba</Link>
            </div>
            <div className="col-md-3 d-flex flex-column ">
            <Link to="/treatment">Fix drums</Link>
               <Link to="/treatment">Fix Guitar</Link>
               <Link to="/treatment">Fix Piano</Link>
               <Link to="/treatment">Fix Keyboard</Link>
               <Link to="/treatment">Fix Bass</Link>
            </div>
            <div className="col-md-3 d-flex flex-column">
            <Link to="/treatment">Products</Link>
               <Link to="/treatment">News</Link>
               <Link to="/treatment">Events</Link>
               <Link to="/treatment">Shows</Link>
            </div>
            <div className="col-md-3 d-flex ">
                <img className="" style={{width:'40px',height:'40px',margin:'5px',backgroundColor:'#4064AC'}} src={Fb} alt="" />
                <img style={{width:'40px',margin:'5px',height:'40px',backgroundColor:'#ED6141'}} src={Insta} alt="" />
                <img style={{width:'40px',margin:'5px',height:'40px',backgroundColor:'#86C6EC'}} src={Twitt} alt="" />
            </div>
            
        </div>
        <p className="text-white text-center">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
    </footer>
    );
};

export default Footer;