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
        <div className="text-white service-box d-flex flex-column justify-content-center align-items-center m-2 p-5">
                        <h3 className="pb-2 ">{service.name}</h3>
                        <div>
                        <img className=" p-3 " style={{height:'150px',width:'150px'}} src={`data:image/png;base64,${service.image.img}`} alt="" />
                        </div>
                        <h6 ><span>Price: </span>{service.price}$</h6>
                        <button  onClick={()=>handleClick(service._id)} className="mt-3 button-design pr-4 pl-4" variant="primary"> Click To Book</button>
                    </div>
    );
};

export default Service;