import React from 'react';
import './home.css';
import mainImage from './assets/main1.jpg';

const Home = () => {
    
    return (
        <div className="container">
            <img src={mainImage} alt="MainImage" className="main-image" />
            <h1 className='centered-title'>Explore.Dream.Discover.</h1>
            <h3 className='centered'>Explore the world, one destination at a time.</h3>
            <button type="button" className='exploring-btn'>Start Exploring</button>
        </div>
    );
}

export default Home;