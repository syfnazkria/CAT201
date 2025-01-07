import React from 'react';
import './HotelPage.css';

const Hotels = () => {
    const hotels = [
        {
            name: 'The George Penang',
            location: 'George Town, Penang',
            description: 'A beautifully restored heritage boutique hotel located in the UNESCO World Heritage Site of George Town. Known for its colonial charm, excellent service, and proximity to famous street food spots.',
            rating: '4.6/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/497818372.jpg?k=38c70d3dc44bcca089f700e659f7942f6a49ed5592d2c096f7265ee5d6f08570&o=',
            website: 'https://www.booking.com/hotel/my/the-george-george-town-penang.en-gb.html'
        },
        {
            name: 'Shangri-La Rasa Sayang',
            location: 'Batu Ferringhi, Penang',
            description: 'A luxurious beachfront resort with spacious rooms, lush tropical gardens, and top-notch dining options. Perfect for a relaxing getaway by the beach.',
            rating: '4.8/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/16666984.jpg?k=7dada62b7065e2f43b8c6d41e448454b0628c43efda7be6bc550157e3dad1798&o=',
            website: 'https://www.booking.com/hotel/my/shangri-la-s-rasa-sayang-resort-spa.en-gb.html'
        },
        {
            name: 'Amari SPICE',
            location: 'Bayan Lepas, Penang',
            description: 'A modern hotel located next to the SPICE Convention Centre. Ideal for business travelers and leisure guests, offering comfortable rooms and excellent amenities.',
            rating: '4.5/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/438312711.jpg?k=749632a2567466d16536eb15eeae31f2c387a03659a134cba68d33be51983e0b&o=',
            website: 'https://www.booking.com/hotel/my/amari-spice-penang-bayan-lepas.en-gb.html'
        },
        {
            name: 'Eastern & Oriental Hotel',
            location: 'George Town, Penang',
            description: ' A legendary 5-star luxury hotel with colonial-era elegance, stunning sea views, and exceptional hospitality. A true icon of Penang.',
            rating: '4.7/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/237235864.jpg?k=7773eed4d2fa5ad337f29fc00aa4667ea7cd9fffac3529af6ac9b38fe01b13de&o=',
            website: 'https://www.booking.com/hotel/my/eastern-oriental.en-gb.html'
        },
        {
            name: 'The Palm Suite',
            location: 'Tanjung Tokong, Penang',
            description: ' A boutique hotel that combines modern design with local heritage. Known for its stylish suites, personalized service, and central location near attractions.',
            rating: '4.3/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max500/599427088.jpg?k=92484afe002fc2a91c0192e007c3922289490c008b6b3b61d1c04ad8aafa6b0b&o=',
            website: 'https://www.booking.com/hotel/my/the-palm-suite-chusan.en-gb.html'
        },
        {
            name: 'Ascott Gurney',
            location: 'Gurney Drive, Penang',
            description: 'A vibrant hotel with an energetic atmosphere, known for its rock-inspired rooms, outdoor pool, and live entertainment.',
            rating: '4.6/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/354169717.jpg?k=e62b9ad30c5b64ae1ef86e833dcf8613afe52fe80984f50643fb77eb5f82647a&o=',
            website: 'https://www.booking.com/hotel/my/the-gurney-resort-amp-residences.en-gb.html'
        },
        {
            name: 'Urban Suites',
            location: 'Jelutong',
            description: 'Contemporary suites designed for modern travelers. Located close to shopping malls, local eateries, and the serene Straits Quay Marina.',
            rating: '4.4/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/580652407.jpg?k=c498f71baaab343d1b4a90b6868a9634cf158970588c9a979b439201640bf043&o=&hp=1',
            website: 'https://www.booking.com/hotel/my/penang-marriott.en-gb.html'
        },
        {
            name: 'Lexis Suites Penang',
            location: 'Teluk Kumbar, Penang',
            description: ' A unique all-suite hotel offering private pools and saunas in every room. Perfect for families and couples seeking luxury and privacy.',
            rating: '4.3/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/223266399.jpg?k=c3a4fc5f0519f2761cd7455d44afb24d99ce76f8d148fbd5830488df80168e23&o=&hp=1',
            website: 'https://www.booking.com/hotel/my/lexis-suites-penang.en-gb.html'
        },
        {
            name: 'Campbell House',
            location: 'Lebuh Campbell, George Town',
            description: 'A charming boutique hotel housed in a restored heritage building. Offers cozy rooms with personalized service and a romantic atmosphere.',
            rating: '4.5/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/262038487.jpg?k=cf2a485dc7a0337f69ad97b5dfc55b6515e78ff45fbcbf19dbf8cdcd9a534a49&o=',
            website: 'https://www.booking.com/hotel/my/campbell-house.en-gb.html'
        },
        {
            name: 'Penang Marriott Hotel',
            location: 'Gurney Drive, Penang',
            description: 'A premium hotel located in the heart of the business district, with contemporary rooms, excellent dining options, and modern facilities.',
            rating: '4.7/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/538656744.jpg?k=1c145aab366a1921cd366c28b2c7c44182c11c8f3ffa99cbef0f659cf3788811&o=&hp=1',
            website: 'https://www.booking.com/hotel/my/penang-marriott.en-gb.html'
        },
        {
            name: 'Apple Heritage Hotel',
            location: 'Jalan Sultan Ahmad Shah',
            description: ' A budget-friendly boutique hotel featuring clean and comfortable rooms with a touch of heritage charm. Ideal for travelers looking for affordability and convenience.',
            rating: '4.2/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/79617936.jpg?k=4548b48db92a93f1aad49d61556a385caf386124e203f57496f4e38bf46a5145&o=&hp=1',
            website: 'https://www.booking.com/hotel/my/deluxcious-heritage.en-gb.html'
        },
        {
            name: 'Hard Rock Hotel',
            location: 'Batu Ferringi, Penang',
            description: 'A vibrant beachfront hotel with rock-and-roll-themed rooms, live music events, and a massive pool with water slides. Perfect for families and music lovers.',
            rating: '4.6/5',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/93254587.jpg?k=271a25832277b1866f6da8b575f576810707d0bfe6b417080ffafee5762654ae&o=&hp=1',
            website: 'https://www.booking.com/hotel/my/hard-rock-penang.en-gb.html'
        },
    ];

    return (
        <div className="hotel-page">
            <h1>Explore Penang Hotels</h1>
            <div className="hotel-spots">
                <div className="hotel-boxes">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="hotel-box">
                            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                            <div className="hotel-info">
                                <h2>{hotel.name}</h2>
                                <p><strong>Location:</strong> {hotel.location}</p>
                                <p><strong>Description:</strong> {hotel.description}</p>
                                <p><strong>Rating:</strong> {hotel.rating}</p>
                                <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="website-link">Book Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hotels;