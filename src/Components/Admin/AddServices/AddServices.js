import React from 'react';
import {Form,Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
            const date = new Date();
            data.date=date;
        fetch('http://localhost:5000/addServices',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)

        })
        .then(res=>res.json())
        .then(succ=>{
            if(succ){
                alert('data inserted successfully');
            }
        })

        // console.log(data)
    }
    return (
        <div>
             <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Service Name" type="text" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Price" type="text" {...register("price", { required: true })} />
                        {errors.price && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input className="text-white border-white" style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Your Number" type="file" {...register("image", { required: true })} />
                        {errors.image && <span className="text-danger">This field is required</span>}
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