import React from 'react';
import './home.css';
import mainImage from './assets/main.png';

const Home = () => {
    return (
        <div className="navbar-brand">
             <img src={mainImage} alt="Main Image " className="main-image" />
        </div>
    );
}

export default Home;