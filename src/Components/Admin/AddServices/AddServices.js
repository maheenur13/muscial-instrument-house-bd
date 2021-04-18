import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const [imageFile, setImageFile] = useState('')
    const [info, setInfo] = useState({})

    const onSubmit = (e) => {
        console.log('submit clicked')
        console.log(info);
       e.preventDefault();
        const date = new Date().toDateString();
        imageFile.date = date;
        const formData = new FormData()
        formData.append('imageFile', imageFile)
        formData.append('serviceName', info.serviceName)
        formData.append('servicePrice', info.servicePrice)

        fetch('http://localhost:5000/addNewService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(results => {
                console.log(results)
            })
            .catch(error => {
                console.error(error)
            })

        // console.log(data)
    }
    const handleBlur = (e) => {
        console.log(e.target.value)
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);


    }
    const handleImageChange = (e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        setImageFile(file);
    }
    return (
        <div>
            <form className="mt-5" onSubmit={onSubmit}>
                <div className="form-group">
                    <input onBlur={handleBlur} style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Service Name" name="serviceName" type="text" required />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Price" name="servicePrice" type="text" required />
                </div>
                <div className="form-group">
                    <input onChange={handleImageChange} className="text-white border-white" style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Your Number" type="file" name="serviceImage" required />
                </div>
                <div className="form-group row">
                </div>
                <div className="form-group">
                    <input style={{ width: '100px', letterSpacing: '2px', padding: '10px' }} type="submit" />
                </div>

            </form>
        </div>
    );
};

export default AddServices;