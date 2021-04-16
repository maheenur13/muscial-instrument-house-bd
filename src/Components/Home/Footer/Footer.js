import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer p-3">
        <div className="row m-5">
            <div className="col-md-3">
                
            </div>
            <div className="col-md-3">
                <h5 style={{color:'#1CC7C1'}}>Services</h5>
            </div>
            <div className="col-md-3">
                <h5 style={{color:'#1CC7C1'}}>Oral Health</h5>
            </div>
            <div className="col-md-3">
                <h5 style={{color:'#1CC7C1'}}>Our Address</h5>
            </div>
        </div>
        <div className="row m-5 ">
            <div className="col-md-3 d-flex flex-column footer-items">
               <Link to="/emergency">Emergency Dental Care</Link>
               <Link to="/cehckup">Check Up</Link>
               <Link to="/treatment">Treatement of Professional Diseases</Link>
               <Link to="/treatment">Tooth Extraction</Link>
               <Link to="/treatment">Check Up</Link>
            </div>
            <div className="col-md-3 d-flex flex-column ">
            <Link to="/treatment">Emergency Dental Care</Link>
               <Link to="/treatment">Check Up</Link>
               <Link to="/treatment">Treatement of Professional Diseases</Link>
               <Link to="/treatment">Tooth Extraction</Link>
               <Link to="/treatment">Check Up</Link>
            </div>
            <div className="col-md-3 d-flex flex-column">
            <Link to="/treatment">Emergency Dental Care</Link>
               <Link to="/treatment">Check Up</Link>
               <Link to="/treatment">Treatement of Professional Diseases</Link>
               <Link to="/treatment">Tooth Extraction</Link>
               <Link to="/treatment">Check Up</Link>
            </div>
            <div className="col-md-3 d-flex flex-column">
            <Link to="/treatment">Emergency Dental Care</Link>
               <Link to="/treatment">Check Up</Link>
               <Link to="/treatment">Treatement of Professional Diseases</Link>
               <Link to="/treatment">Tooth Extraction</Link>
               <Link to="/treatment">Check Up</Link>
            </div>
            
        </div>
        <p className="text-white text-center">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
    </footer>
    );
};

export default Footer;