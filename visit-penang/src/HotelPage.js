import React, { useState } from "react";
import "./HotelPage.css";

function HotelPage() {
    const [searchData, setSearchData] = useState({
        location: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });

    const penangPlaces = [
        "George Town",
        "Batu Ferringhi",
        "Penang Hill",
        "Gurney Drive",
        "Kek Lok Si Temple",
        "Tanjung Bungah",
        "Balik Pulau",
        "Penang National Park",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Data:", searchData);
    };

    return (
        <div className="hotel-page">
            {/* Hero Banner */}
            <section className="hotel-hero">
                <div className="hero-content">
                    <h1>Find Your Perfect Stay</h1>
                    <p>Book budget-friendly hotels in Penang today.</p>
                    <form onSubmit={handleSearch} className="search-bar">
                        <select
                            name="location"
                            value={searchData.location}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a location</option>
                            {penangPlaces.map((place, index) => (
                                <option key={index} value={place}>
                                    {place}
                                </option>
                            ))}
                        </select>
                        <input
                            type="date"
                            name="checkIn"
                            value={searchData.checkIn}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="date"
                            name="checkOut"
                            value={searchData.checkOut}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="guests"
                            min="1"
                            placeholder="Guests"
                            value={searchData.guests}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="search-button">
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* Hotel List Section */}
            <section className="hotel-list">
                <h2>Available Hotels</h2>
                <div className="hotel-grid">
                    <div className="hotel-card">
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt="Hotel"
                            className="hotel-image"
                        />
                        <div className="hotel-info">
                            <h3>Hotel Paradise</h3>
                            <p>From $120/night</p>
                            <p>⭐⭐⭐⭐</p>
                            <button className="book-now-button">Book Now</button>
                        </div>
                    </div>
                    <div className="hotel-card">
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt="Hotel"
                            className="hotel-image"
                        />
                        <div className="hotel-info">
                            <h3>Grand Stay</h3>
                            <p>From $150/night</p>
                            <p>⭐⭐⭐⭐⭐</p>
                            <button className="book-now-button">Book Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HotelPage;
