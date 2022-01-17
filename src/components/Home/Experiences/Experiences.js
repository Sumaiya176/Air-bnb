import React, { useEffect, useState } from 'react';
import home1 from '../../../images/home1.jpg';
import home2 from '../../../images/home2.jpg';
import home3 from '../../../images/home3.jpg';
import './Experiences.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


// const datas = [
//     {
//         title: "Discover the city's party scene",
//         price: "55",
//         img: home1,
//         location: "New York"
        
//     },
//     {
//         title: "Discover the city's party scene",
//         price: "29",
//         img: home2,
//         location: "New York"
//     },
//     {
//         title: "Discover the city's party scene",
//         price: "35",
//         img: home3,
//         location: "New York"
//     }
// ]



const Experiences = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/hotels')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDatas(data)
            })
            
    }, [datas.length])

    return (
        <div>
        <div className="row justify-content-center">
            {
                datas?.map(((data) => {
                    return (
                            <div className="col-md-4">
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

export default Experiences;