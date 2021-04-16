import React from 'react';
import{Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
const Service = ({service}) => {
    const history= useHistory();
    const handleClick = (id)=>{
            console.log(id);
            const url=`/serviceClaimed/${id}`;
            history.push(url);
    }
    return (
        <div style={{border:'4px solid white'}} className="text-white  d-flex flex-column justify-content-center align-items-center p-3">
                        <h3 className="pb-2">{service.name}</h3>
                        <img style={{height:'200px',width:'200px'}} src={service.image} alt="" />
                        <h5>{service.price}</h5>
                        <Button onClick={()=>handleClick(service._id)} className="mt-3" variant="warning"> Click To Book</Button>
                    </div>
    );
};

export default Service;