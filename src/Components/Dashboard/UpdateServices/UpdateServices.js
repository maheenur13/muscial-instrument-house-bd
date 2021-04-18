import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const UpdateServices = () => {
    const history = useHistory();
    const [updateService,setUpdateService]= useState([]);
    const [updatedTrue,setUpdatedTrue]=useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/addNewService')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUpdateService(data)})

    },[])



    const handleDeleteService = (id,e) =>{
        console.log(id);
        fetch(`http://localhost:5000/deleteService/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log('deleted successfully');
            if(result){
                alert('deleted seccessfully')
             history.push('/dashboard/addservices');
             history.push('/dashboard/updateServices');
                console.log(e.target)
            }
        })
    }
    const handleUpdateService = (id,e)=>{
        setUpdatedTrue(true)
        console.log(id)
//         fetch('http://localhost:5000/updateStatus/'+id,{
//     method:'PATCH',
//     headers:{'Content-Type':'application/json'},
//     body: JSON.stringify()
//   })
//   .then(res=>res.json())
//   .then(data=>{
//     console.log(data);
//   })
    }
    return (
        <div>
            <h1>This is update services</h1>

            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Service Name</th>
      <th>Image</th>
      <th>Price</th>
      <th>Update</th>
      <th>Delete</th>
      
    </tr>
  </thead>
  <tbody>
{
    updateService.map(service=> <tr><td>1</td>
        <td>{service.name}</td>
        <td><img style={{width:'40px',margin:'auto'}} src={`data:image/png;base64,${service.image.img}`}  alt=""/></td>
        <td>{service.price}</td>
        <td><FontAwesomeIcon onClick={(e)=>handleUpdateService(service._id,e)} icon={faEdit}/></td>
        <td><FontAwesomeIcon onClick={(e)=>handleDeleteService(service._id,e)} icon={faTrash}/></td>
        
        </tr>)
}
    
    
  </tbody>
</Table>
        </div>
    );
};

export default UpdateServices;