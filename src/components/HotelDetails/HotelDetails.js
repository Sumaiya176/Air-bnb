import React, {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import home1 from '../../images/home1.jpg';
import style from './HotelDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCheckSquare, faSprayCan, faUser, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { loginContext } from '../../App';



const datass = [{
    id: 1,
    pic: home1,
    title: 'Light bright airy stylish apt & safe preaceful stay',
    location: 'Dhaka',
    country: 'Bangladesh',
    bedroom: 2,
    bed: 2,
    bath: 2
}]


const HotelDetails = () => {

    const [isLogedin] = useContext(loginContext);
    //console.log(isLogedin.photoURL);

    const [datas, setDatas] = useState([]);
    const [clientInfo, setClientInfo] = useState([]);
    let { Id } = useParams();

    const clientData = JSON.parse(localStorage.getItem('client'));
    //console.log(clientData);

    useEffect(() => {
        fetch(`http://localhost:5000/singlehotel/${Id}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setDatas(data)
            })
            
    }, [datas.length])


    return (
        <div>
            {datass.map((data, id) => {
                return(
                    <div className={style.text_color} key="id">
                        <img src='https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                        className={style.single_img} alt="apt"></img>
                        <div className="row">
                            <div className="col-md-7">
                                <h3 className="mt-4 text-dark">{data.title}</h3>
                                <div className='d-flex'>
                                <p>{data.location}</p>
                                <p className="mx-2">{data.country}</p>
                                </div>
                                <div className={style.bed}>
                                    <span>Bedroom{" "}{data.bedroom}</span>
                                    <span className="mx-5">Bed{" "}{data.bed}</span>
                                    <span>Bath{" "}{data.bath}</span>
                                    
                                </div>
                                <hr style={{width:"83%",textAlign:"left",
                                height:"1.2px",marginLeft:"0"}} />
                                <div className="d-flex mt-4">
                                <FontAwesomeIcon size="lg" icon={faHome} />
                                <div className="mx-4">
                                    <h6>Entire home</h6>
                                    <p>You'll have the condominium to yourself</p>
                                </div>
                                </div>
                                <div className="d-flex mt-4">
                                <FontAwesomeIcon size="lg" icon={faCheckSquare} />
                                <div className="mx-4">
                                    <h6>Self check-in</h6>
                                    <p>You can check in with the doorman</p>
                                </div>
                                </div>
                                <div className="d-flex mt-4">
                                <FontAwesomeIcon size="lg" icon={faSprayCan} />
                                <div className="mx-4">
                                    <h6>Sparkling clean</h6>
                                    <p>10 recent guests said this place was sparkling clean.</p>
                                </div>
                                </div>
                                <div className="d-flex mt-4">
                                <FontAwesomeIcon size="lg" icon={faUser} />
                                <div className="mx-4">
                                    <h6>Rowdra is a Superhost</h6>
                                    <p>Superhost are experinced, highly rated hosts who are committed to providing great stays for guests.</p>
                                </div>
                                </div>
                                <hr style={{width:"83%",textAlign:"left",
                                height:"1.2px",marginLeft:"0"}} />
                                <div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section </p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                  <div className="shadow border m-3 p-4">
                                  <div>
                                        <h5 className="text-dark">$35/ night</h5>
                                        <h6 className="py-2">Date</h6>
                                        <div className="row border py-3 rounded">
                                            <h6 className="col">{clientData.arrival}</h6>
                                            <FontAwesomeIcon className="col" size="lg" icon={faArrowRight} />
                                            <h6 className="col">{clientData.departure}</h6>
                                        </div>
                                        <h6 className="pt-3">Guests</h6>
                                        <div className="row border py-2 rounded">
                                            <h5>{`${clientData.adult+clientData.child}`} Guests</h5>
                                        </div>
                                        <div className="row mt-2">
                                            <p className="col">$35 x 4 nights</p>
                                            <p className="col text-align-center">$136</p>
                                            </div>
                                        <hr style={{width:"83%",textAlign:"left",
                                height:"1.2px",marginLeft:"0"}} />
                                <div className="row mt-2">
                                            <p className="col">Cleaning Fee</p>
                                            <p className="col text-align-center">$10</p>
                                            </div>
                                        <hr style={{width:"83%",textAlign:"left",
                                height:"1.2px",marginLeft:"0"}} />
                                <div className="row mt-2">
                                            <p className="col">Service Fee</p>
                                            <p className="col text-align-center">$18</p>
                                            </div>
                                        <hr style={{width:"83%",textAlign:"left",
                                height:"1.2px",marginLeft:"0"}} />
                                <div className="row mt-2">
                                            <h5 className="col">Total</h5>
                                            <p className="col text-align-center">$167</p>
                                            </div>
                                        <hr style={{width:"83%",textAlign:"left",
                                height:"1.2px",marginLeft:"0"}} />
                                <div className="d-grid gap-2">
                                    <button className="btn py-3" id={style.reserve_btn} type="button">Reserve</button>
                                </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default HotelDetails;