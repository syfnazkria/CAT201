import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HotelPage from "./HotelPage";
import FoodPage from "./FoodPage";
import TouristPage from "./TouristPage";

function App() {
    const iconsSectionRef = useRef(null); // Create a reference for the Icons Section

    const handleScroll = () => {
        // Scroll to the Icons Section
        iconsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {/* Hero Section */}
                                <section className="hero-section">
                                    <div className="hero-overlay"></div>
                                    <div className="hero-content">
                                        <h1>Welcome to Visit Penang!</h1>
                                        <p>Explore the beautiful attractions and culture of Penang.</p>
                                        <button className="cta-button" onClick={handleScroll}>
                                            Start Exploring
                                        </button>
                                    </div>
                                </section>

                                {/* Icons Section */}
                                <section ref={iconsSectionRef} className="icons-section">
                                    <Link to="/food" className="icon" id="food">
                                        <h3>Food</h3>
                                        <p>Delicious local dishes await you!</p>
                                    </Link>

                                    <Link to="/tourist" className="icon" id="tourist">
                                        <h3>Tourist</h3>
                                        <p>Explore scenic views and landmarks.</p>
                                    </Link>

                                    <Link to="/hotels" className="icon" id="hotel">
                                        <h3>Hotel</h3>
                                        <p>Stay in luxury hotels in Penang.</p>
                                    </Link>
                                </section>
                            </>
                        }
                    />
                    <Route path="/hotels" element={<HotelPage />} />
                    <Route path="/food" element={<FoodPage />} />
                    <Route path="/tourist" element={<TouristPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
