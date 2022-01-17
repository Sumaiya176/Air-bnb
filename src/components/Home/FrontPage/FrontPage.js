import React, { useState } from 'react';
import Experiences from '../Experiences/Experiences';
import Hotels from '../Hotels/Hotels';
import SearchHotels from '../SearchHotels/SearchHotels';

const FrontPage = () => {

    const [isSearched, setIsSearched] = useState(false);
    const [searchedLocation, setSearchedLocation] = useState("");

    return (
        <div>
            <div className="row justify-content-center">
            <div className="col-md-4">
                <SearchHotels setSearchedLocation={setSearchedLocation} isSearched={isSearched} setIsSearched={setIsSearched}  />
            </div>
            <div className="col-md-8">
                {isSearched ? <Hotels searchedLocation={searchedLocation} /> : <Experiences />}
                </div>
            </div>
        </div>
    );
};

export default FrontPage;