import './App.css';
import HomePage from './components/Home/HomePage/HomePage';
import { Routes, Route, Navigate } from "react-router-dom";
import AddHotels from './components/AddHotels/AddHotels';
import HotelDetails from './components/HotelDetails/HotelDetails';
import Login from './components/Home/FirebaseLogin/Login';
import { createContext, useState } from 'react';
import RequiredAuth from './components/RequiredAuth';

export const loginContext = createContext();

function App() {

     const [isLogedin, setIsLogedin] = useState(null);

  return (
    <loginContext.Provider value={[isLogedin, setIsLogedin]}>
    <div className="container">
      <Routes>
      <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/" element={<HomePage />} />
       <Route element={<RequiredAuth />}>
          <Route path="/add-hotels" element={<AddHotels />} />
          <Route path="/hotelDetails/:Id" element={<HotelDetails />} />
       </Route>
        <Route path="/login" element={<Login />} />
        {/* <Route
        exact
        path="/hotelDetails/:Id"
        element={
          <RequiredAuth >
            <HotelDetails />
          </RequiredAuth>
        }
      /> */}
      </Routes>
    </div>
    </loginContext.Provider>
  );
}

export default App;
