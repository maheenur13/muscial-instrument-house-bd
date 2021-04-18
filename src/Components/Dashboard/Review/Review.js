import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { userContext } from '../../../App';
const Review = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit=(data)=>{
        data.image=loggedInUser.photoURL;
        console.log(data);
        fetch('http://localhost:5000/addReviews',{
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
            <h1 className="text-white">This is review new</h1>
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Your name</label>
                        <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)', marginBottom: '5px' }} placeholder="Enter Your Name" type="text" {...register("name", { required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        {/* <input style={{ border: '1px solid rgba(10, 10, 10, 0.192)' }} placeholder="Enter Your Title" type="text" {...register("title", { required: true })} /> */}
                        <label>Choose Your Answer</label>
                        <select className="border w-100 pt-2 pb-2 text-danger" {...register("status", { required: true })}>
                            <option >Satisfied</option>
                            <option>very Satisfied</option>
                            <option>Average</option>
                            <option>Not Satisfied</option>
                            <option>Poor Service</option>
                        </select>
                        {errors.status && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                    <label>Description</label>
                        <textarea className="pt-3 pl-3" style={{ border: '1px solid rgba(10, 10, 10, 0.192)',width:'100%' }} placeholder="Enter Your Review Details" {...register("description", { required: true })} />
                        {errors.description && <span className="text-danger">This field is required</span>}
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

export default Review;