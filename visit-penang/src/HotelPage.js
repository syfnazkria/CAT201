import React from "react";
import "./HotelPage.css";

function HotelPage() {
    const hotels = [
        {
            name: "The George Penang",
            description: "Luxury colonial-style hotel with stunning views.",
            location: "138 Jalan Penang Georgetown",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497818372.jpg?k=38c70d3dc44bcca089f700e659f7942f6a49ed5592d2c096f7265ee5d6f08570&o=",
        },
        {
            name: "Bertam Resort",
            description: "Modern and vibrant hotel in the heart of Penang.",
            location: "George Town",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/482659228.jpg?k=4110a5da9d2c101d43d9de4e16a587a292a5b426132adac1e504f9328035bd56&o=",
        },
        {
            name: "Shangri-La Rasa Sayang",
            description: "Beachfront resort offering world-class amenities.",
            location: "Jalan Batu Ferringhi",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/16666984.jpg?k=7dada62b7065e2f43b8c6d41e448454b0628c43efda7be6bc550157e3dad1798&o=",
        },
        {
            name: "Amari SPICE",
            description: "Conveniently located with great access to shopping areas.",
            location: "Bayan Lepas",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438312711.jpg?k=749632a2567466d16536eb15eeae31f2c387a03659a134cba68d33be51983e0b&o=",
        },
        {
            name: "Eastern & Oriental Hotel",
            description: "An elegant hotel with spacious suites and sea views.",
            location: "Georgetown",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237235864.jpg?k=7773eed4d2fa5ad337f29fc00aa4667ea7cd9fffac3529af6ac9b38fe01b13de&o=",
        },
        {
            name: "The Palm Suite Tanjung Tokong",
            description: "Chic and contemporary hotel located along Gurney Drive.",
            location: "Gurney Drive",
            image: "https://cf.bstatic.com/xdata/images/hotel/max500/599427088.jpg?k=92484afe002fc2a91c0192e007c3922289490c008b6b3b61d1c04ad8aafa6b0b&o=",
        },
        {
            name: "Urban Suites",
            description: "Chic and contemporary hotel located along Gurney Drive.",
            location: "Gurney Drive",
            image: "https://cf.bstatic.com/xdata/images/hotel/max300/572103209.jpg?k=d11cacb70007afc51237386dff23b549883e3edd0b400be28394b4da8b158fcf&o=",
        },
        {
            name: "Campbell House",
            description: "Chic and contemporary hotel located along Gurney Drive.",
            location: "Gurney Drive",
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262038487.jpg?k=cf2a485dc7a0337f69ad97b5dfc55b6515e78ff45fbcbf19dbf8cdcd9a534a49&o=",
        },
        {
            name: "G Hotel Gurney",
            description: "Chic and contemporary hotel located along Gurney Drive.",
            location: "Gurney Drive",
            image: "https://example.com/ghotel.jpg",
        },
    ];

    return (
        <div className="hotel-page">
            <h1>Explore Hotels in Penang</h1>

            {/* Hotel List Section */}
            <div className="hotel-list">
                <h2>Top Hotels in Penang</h2>
                <div className="hotel-grid">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="hotel-card">
                            <img
                                src={hotel.image}
                                alt={hotel.name}
                                className="hotel-image"
                            />
                            <div className="hotel-info">
                                <h3>{hotel.name}</h3>
                                <p>{hotel.description}</p>
                                <p className="location">{hotel.location}</p>
                                <button className="book-now-button">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotelPage;
