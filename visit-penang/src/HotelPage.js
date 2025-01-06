import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./HotelPage.css";

function HotelPage() {
    const hotels = [
        {
            name: "The George Penang",
            description: "Luxury colonial-style hotel with stunning views. Offers guests 92 tastefully-furnished rooms and suites.",
            location: "138 Jalan Penang Georgetown",
            rating: 8.3,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/497818372.jpg?k=38c70d3dc44bcca089f700e659f7942f6a49ed5592d2c096f7265ee5d6f08570&o=",
            bookingUrl: "https://www.booking.com/hotel/my/the-george-george-town-penang.en-gb.html",
        },
        {
            name: "Bertam Resort",
            description: "Modern and vibrant hotel in the heart of Penang. Offer largest indoor pool suites, duplex level premium suites.",
            location: "Kepala Batas",
            rating: 8.8,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/482659228.jpg?k=4110a5da9d2c101d43d9de4e16a587a292a5b426132adac1e504f9328035bd56&o=",
            bookingUrl: "https://www.booking.com/hotel/my/bertam-resort-amp-water-park.en-gb.html",
        },
        {
            name: "Shangri-La Rasa Sayang",
            description: "Beachfront resort offering world-class amenities. Offer 304 guestrooms and suites offer enchanting views of the ocean or rolling hills",
            location: "Jalan Batu Ferringhi",
            rating: 8.6,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/16666984.jpg?k=7dada62b7065e2f43b8c6d41e448454b0628c43efda7be6bc550157e3dad1798&o=",
            bookingUrl: "https://www.booking.com/hotel/my/shangri-la-s-rasa-sayang-resort-spa.en-gb.html",
        },
        {
            name: "Amari SPICE",
            description: "Conveniently located with great access to shopping areas. Offer 453 guest rooms and suites with warm natural light, each one well-equipped for the modern business traveller.",
            location: "Bayan Lepas",
            rating: 8.8,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438312711.jpg?k=749632a2567466d16536eb15eeae31f2c387a03659a134cba68d33be51983e0b&o=",
            bookingUrl: "https://www.booking.com/hotel/my/amari-spice-penang-bayan-lepas.en-gb.html",
        },
        {
            name: "Eastern & Oriental Hotel",
            description: "An elegant hotel with spacious suites and sea views. Offering spacious studio suites and corner suites",
            location: "Farquhar Street",
            rating: 8.8,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/237235864.jpg?k=7773eed4d2fa5ad337f29fc00aa4667ea7cd9fffac3529af6ac9b38fe01b13de&o=",
            bookingUrl: "https://www.booking.com/hotel/my/eastern-oriental.en-gb.html",
        },
        {
            name: "Campbell House",
            description: "One of the best Boutique Hotels located in George Town. Offer 11 uniquely outfitted guest rooms, a lobby, reading room, restaurant and rooftop terrace",
            location: "Lebuh Campbell, George Town",
            rating: 9.3,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/262038487.jpg?k=cf2a485dc7a0337f69ad97b5dfc55b6515e78ff45fbcbf19dbf8cdcd9a534a49&o=",
            bookingUrl: "https://www.booking.com/hotel/my/campbell-house.en-gb.html",
        },
        {
            name: "Penang Marriott Hotel",
            description: "Chic and contemporary hotel located along Gurney Drive. Offer 223 number of luxury rooms with panoramic views of the Gurney waterfront",
            location: "Persiaran Gurney",
            rating: 9.1,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538656744.jpg?k=1c145aab366a1921cd366c28b2c7c44182c11c8f3ffa99cbef0f659cf3788811&o=&hp=1",
            bookingUrl: "https://www.booking.com/hotel/my/penang-marriott.en-gb.html",
        },
        {
            name: "Urban Suites",
            description: "Urban Suites TWO Or THREE Bedroom Georgetown by ANC is set in Jelutong and features a rooftop pool and pool views.",
            location: "Jelutong",
            rating: 9.3,
            image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/580652407.jpg?k=c498f71baaab343d1b4a90b6868a9634cf158970588c9a979b439201640bf043&o=&hp=1",
            bookingUrl: "https://www.booking.com/hotel/my/urban-suites-homestay-jelutong-jelutong1.en-gb.html",
        },
        {
            name: "The Palm Suite",
            description: "Offers top-notch services and amenities, ensuring guests experience utmost comfort.",
            location: "Tanjung Tokong",
            rating: 9.0,
            image: "https://cf.bstatic.com/xdata/images/hotel/max500/599427088.jpg?k=92484afe002fc2a91c0192e007c3922289490c008b6b3b61d1c04ad8aafa6b0b&o=",
            bookingUrl: "https://www.booking.com/hotel/my/the-palm-suite-chusan.en-gb.html",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    };

    const getVisibleHotels = () => {
        const prevIndex = (currentIndex - 1 + hotels.length) % hotels.length;
        const nextIndex = (currentIndex + 1) % hotels.length;
        return [
            hotels[prevIndex], // Previous
            hotels[currentIndex], // Current
            hotels[nextIndex], // Next
        ];
    };

    // Add swipe handlers using react-swipeable
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventScrollOnSwipe: true,
        trackMouse: true, // Enable swipe gestures for mouse dragging too
    });

    return (
        <div className="hotel-page">
            <h1>Explore Hotels in Penang</h1>
            <div className="carousel-container" {...swipeHandlers}>
                <button className="carousel-arrow left-arrow" onClick={handlePrev}>
                    ❮
                </button>
                <div className="carousel">
                    {getVisibleHotels().map((hotel, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 1 ? "center" : "adjacent"}`}
                        >
                            <img src={hotel.image} alt={hotel.name} className="hotel-image"/>
                            <div className="hotel-info">
                                <h3>{hotel.name}</h3>
                                <p className="location">{hotel.location}</p>
                                <p>{hotel.description}</p>
                                <p className="rating">⭐ {hotel.rating.toFixed(1)}</p>
                                <a
                                    href={hotel.bookingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="book-now"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-arrow right-arrow" onClick={handleNext}>
                    ❯
                </button>
            </div>
        </div>
    );
}

export default HotelPage;
