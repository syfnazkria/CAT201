import React from "react";
import "./FoodPage.css"; // Optional: Create a CSS file for FoodPage

function FoodPage() {
    return (
        <div className="food-page">
            <h1>Explore Penang's Culinary Delights</h1>
            <p>Penang is famous for its mouth-watering street food and local delicacies. Indulge in flavors that will tantalize your taste buds.</p>
            <ul className="food-list">
                <li>Char Kway Teow</li>
                <li>Penang Laksa</li>
                <li>Hokkien Mee</li>
                <li>Cendol</li>
            </ul>
        </div>
    );
}

export default FoodPage;
