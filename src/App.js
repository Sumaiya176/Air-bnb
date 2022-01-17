import './App.css';
import HomePage from './components/Home/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import AddHotels from './components/AddHotels/AddHotels';
import HotelDetails from './components/HotelDetails/HotelDetails';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="add-hotels" element={<AddHotels />} />
        <Route path="hotelDetails/:Id" element={<HotelDetails />} />
      </Routes>
    </div>
  );
}

export default App;
