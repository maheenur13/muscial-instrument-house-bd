import React from 'react';
import Button from 'react-bootstrap/Button';
import './Spirit.css';
const Spirit = () => {
    return (
        <section className="p-5 spirit-section-design d-flex justify-content-center alighn-items-center">
            <div className="border m-3 p-4 d-flex justify-content-center align-items-center flex-column w-25 m-auto">
                <h1 className="text-white">Our Spirit</h1>
                <p className="text-white text-center">Everything we do is about inspiring musicians to create something amazing. Your music doesnʼt stand still, so why would we?</p>
            <Button variant="outline-info" className="mt-3">View Blog</Button>
            </div>
        </section>
    );
};

export default Spirit;