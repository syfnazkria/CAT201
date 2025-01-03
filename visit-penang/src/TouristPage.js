import React from "react";
import "./TouristPage.css"; // Optional: Create a CSS file for TouristPage

function TouristPage() {
    return (
        <div className="tourist-page">
            <h1>Discover Penang's Tourist Attractions</h1>
            <p>Penang offers a mix of cultural heritage, scenic views, and modern attractions. Here are some must-visit places:</p>
            <ul className="tourist-list">
                <li>Penang Hill</li>
                <li>Kek Lok Si Temple</li>
                <li>George Town Street Art</li>
                <li>Batu Ferringhi Beach</li>
            </ul>
        </div>
    );
}

export default TouristPage;
