import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
const AddProducts = () => {

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
        formData.append('instrumentName', info.instrumentName)
        formData.append('modelName', info.modelName)
        formData.append('instrumentPrice', info.instrumentPrice)

        fetch('http://localhost:5000/addInstruments', {
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
        <div>        <form className="mt-5" onSubmit={onSubmit}>
                <div className="form-group">
                    <input onBlur={handleBlur} style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Instrument Name" name="instrumentName" type="text" required />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Model Name" name="modelName" type="text" required />
                </div>
                <div className="form-group">
                    <input onBlur={handleBlur} style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Price" name="instrumentPrice" type="text" required />
                </div>
                <div className="form-group">
                    <input onChange={handleImageChange} className="text-white border-white" style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }}  type="file" name="serviceImage" required />
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

export default AddProducts;