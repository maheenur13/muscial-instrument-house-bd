import React from 'react';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        console.log(data);
        fetch('http://localhost:5000/addAdminEmail',{
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
    }
    return (
        <div>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Admin Email" type="email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input style={{ width: '100px', letterSpacing: '2px', padding: '10px' }} type="submit" />
                    </div>
                    
                </form>
        </div>
    );
};

export default MakeAdmin;