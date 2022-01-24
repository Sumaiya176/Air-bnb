import React from 'react'
import { useForm } from 'react-hook-form'
import './SearchHotels.css'

const SearchHotels = ({ isSearched, setIsSearched, setSearchedLocation }) => {
  const searchButtonHandler = () => {
    setIsSearched(!isSearched)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    //console.log(data);
    setSearchedLocation(data.location);

    localStorage.setItem('client', JSON.stringify(data));

    fetch('http://localhost:5000/addClient', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 
    }, 
    body: JSON.stringify(data)
    })
  }
  return (
    <div>
      <div className="form">
        <h3>Where do you want to go?</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h5 className="mt-4">Location</h5>
            <br></br>
            <input
              style={{
                width: '95%',
                height: '45px',
                border: '2px solid lightgrey',
                borderRadius: '5px',
              }}
              {...register('location', { required: true })}
              type="text"
            ></input>
            {errors.location && <span>This field is required</span>}
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h6>Arrival</h6>
              <input
                style={{
                  width: '95%',
                  height: '45px',
                  border: '2px solid lightgrey',
                  borderRadius: '5px',
                }}
                {...register('arrival', { required: true })}
                type="date"
              ></input>
              {errors.arrival && <span>This field is required</span>}
            </div>
            <div className="col-md-6">
              <h6>Departure</h6>
              <input
                style={{
                  width: '95%',
                  height: '45px',
                  border: '2px solid lightgrey',
                  borderRadius: '5px',
                }}
                {...register('departure', { required: true })}
                type="date"
              ></input>
              {errors.departure && <span>This field is required</span>}
            </div>
          </div>
          <div className="mt-4">
            <h5>Guests</h5>
            <label>Adult</label>
            <br></br>
            <input
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                width: '95%',
                height: '45px',
                border: '2px solid lightgrey',
                borderRadius: '5px',
              }}
              {...register('adult', { required: true })}
              type="number"
            ></input>
            <br></br>
            {errors.adult && <span>This field is required</span>}
            <label>Child</label>
            <br></br>
            <input
              style={{
                marginTop: '10px',
                width: '95%',
                height: '45px',
                border: '2px solid lightgrey',
                borderRadius: '5px',
              }}
              {...register('child', { required: true })}
              type="number"
            ></input>
            <br></br>
            {errors.child && <span>This field is required</span>}
          </div>
          <div className="mt-3 d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-warning" type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
      <div className="mt-2 d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" onClick={searchButtonHandler}>
          Button
        </button>
      </div>
    </div>
  )
}

export default SearchHotels
