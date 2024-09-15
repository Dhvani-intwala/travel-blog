import React from 'react';
import './home.css';
import mainImage from './assets/main1.jpg';
import travelBlog from './assets/travel-blog.jpg';
import destinationImg from './assets/Destination.webp'
import aboutmeImg from './assets/aboutme.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="herosection">
            <div className='container-fluid'>
                <img src={mainImage} alt="MainImage" className="main-image" />
                <h1 className="centered-title">Explore.Dream.Discover.</h1>
                <h3 className="centered">Explore the world, one destination at a time.</h3>
                <button type="button" className="exploring-btn">Start Exploring</button>
            </div>
            
            <div className="mt-3">
                <h1 className="featured-title"><span>Featured</span></h1>
  
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <img src={travelBlog} alt="Travel-blog img" className="travel-image" />
                            <h3>Travel blog</h3>
                        </div>
                        <div className="col-sm">
                            <img src={destinationImg} alt="destination img" className="travel-image" /> 
                            <h3>Destination</h3>
                        </div>
                        <div className="col-sm">
                            <img src={aboutmeImg} alt="Aboutme img" className="travel-image" />
                            <h3>About Me</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
