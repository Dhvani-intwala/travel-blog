import React from 'react';
import './home.css';
import mainImage from './assets/main.png';

const Home = () => {
    return (
        <div className="container">
            <img src={mainImage} alt="MainImage" className="main-image" />
            <h1 className='centered-title'>Explore.Dream.Discover.</h1>
            <h3 className='centered'>This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the globe.</h3>
        </div>
    );
}

export default Home;