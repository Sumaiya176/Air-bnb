import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './AddHotels.css';

const AddHotels = () => {

  const [imageURL, setimageURL] = useState(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleImageupload = (e) => {
    const imageData = new FormData();
    imageData.set('key', '297abeb5fd5e0e20c0c4d92713367a68');
    imageData.append('image', e.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then((response) => {
        setimageURL(response.data.data.display_url)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const onSubmit = (data) => {
    console.log(data);

    const postData = {
      country: data.country,
      location: data.hotelLocation,
      name: data.hotelName,
      ownerName: data.ownerName,
      fare: data.rentFare,
      img: imageURL
    }

    fetch('http://localhost:5000/addHotel', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 
    }, 
    body: JSON.stringify(postData)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Owner Name</h5>
        <input className="add-hotel-input mb-4" {...register('ownerName', { required: true })} />
        {errors.ownerName && <span>Owner Name is required</span>}
        <br></br>
        <h5>Hotel or Resort Name</h5>
        <input className="add-hotel-input mb-4" {...register('hotelName', { required: true })} />
        {errors.hotelName && <span>Hotel or Resort Name is required</span>}
        <br></br>
        <h5>Hotel or Resort Location</h5>
        <input className="add-hotel-input mb-4" {...register('hotelLocation', { required: true })} />
        {errors.hotelLocation && <span>Hotel or Resort Location is required</span>}
        <br></br>
        <h5>Country</h5>
        <select className="add-hotel-input mb-4" {...register("country", { required: true })}>
        <option value="Bangladesh">Bangladesh</option>
        <option value="China">China</option>
        <option value="America">America</option>
        <option value="Canada">Canada</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Austria">Austria</option>
      </select>
        {errors.country && <span>Country is required</span>}
        <br></br>
        <h5>Rent fare for per person</h5>
        <input type="number" className="add-hotel-input mb-4" {...register('rentFare', { required: true })} />
        {errors.rentFare && <span>Rent fare for per person is required</span>}
        <br></br>
        <input type="file" onChange={handleImageupload} className="add-hotel-input mb-4"  />
        {errors.img && <span>This field is required</span>}
        <br></br>
        <input className="add-hotel-submitInput mb-4" type="submit" />
      </form>
    </div>
  )
}

export default AddHotels
