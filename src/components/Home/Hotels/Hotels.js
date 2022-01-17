import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Hotels.module.css';
import { useNavigate } from "react-router-dom";



const Hotels = ({searchedLocation}) => {
    console.log(searchedLocation);
    const [datas, setDatas] = useState([]);

    let navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:5000/selectedhotels/${searchedLocation}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDatas(data)
            })
            
    }, [datas.length])

    const productDetailHandle = (id) => {
        console.log("iiidddd",id);
        navigate(`/hotelDetails/${id}`);
        //history.push("hotelDetails/:Id");
    }


    return (
        <div>
        <div className="row justify-content-center">
            {
                datas?.map(((data) => {
                    return (
                            <div 
                            onClick={() => productDetailHandle(data._id
                                )} 
                            className="col-md-4">
                                <img className="home_img" src={data.img} alt="home_img" />
                                <p><small className="mt-2 text-primary">{data.location}</small></p>
                                <h6 className="mt-4">{data.name}</h6>
                                <p>${data.rentFare} per person</p>
                                <FontAwesomeIcon color="blue" className="star_icon" icon={faStar} /> <FontAwesomeIcon className="star_icon" color="blue" icon={faStar} /> <FontAwesomeIcon color="blue" className="star_icon" icon={faStar} /> <FontAwesomeIcon color="blue" className="star_icon" icon={faStar} /> <FontAwesomeIcon color="blue" className="star_icon" icon={faStar} />
                            </div>
                    )
                }))
            }
        </div>
        </div>
    );
};

export default Hotels;