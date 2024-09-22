import React from 'react';
import './home.css';
import mainImage from './assets/main1.jpg';
import travelBlog from './assets/travel-blog.jpg';
import destinationImg from './assets/Destination.webp'
import aboutmeImg from './assets/aboutme.jpg'
import bothImg from './assets/both-img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="herosection">
            <div className=''>
                <img src={mainImage} alt="MainImage" className="main-image" />
                <h1 className="centered-title">Explore.Dream.Discover.</h1>
                <h3 className="centered">Explore the world, one destination at a time.</h3>
                <button type="button" className="exploring-btn">Start Exploring</button>
            </div>
            
            <div className="mb-5 mt-5">
                <h1 className="all-title"><span>Featured</span></h1>

                <div className="container mb-5 mt-5">
                    <div className="row">
                        <div className="col-sm">
                            <img src={travelBlog} alt="Travel-blog img" className="travel-image" />
                            <h3 className="mt-3 title">Travel Blog</h3>
                        </div>
                        <div className="col-sm">
                            <img src={destinationImg} alt="destination img" className="travel-image" />
                            <h3 className="mt-3 title">Destination</h3>
                        </div>
                        <div className="col-sm">
                            <img src={aboutmeImg} alt="Aboutme img" className="travel-image" />
                            <h3 className="mt-3 title">About Me</h3>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 pt-5">
                    {/* <h1 className="all-title"><span>About</span></h1> */}
                    <div className="about-flex position-relative">
                        <div className="self-image">
                            <img src={bothImg} alt="Aboutme img" className="both-image" />
                        </div>
                        <div className="text">
                            <h1 className='beautiful-text mb-2'>Welcome to my travel blog!</h1>
                            <p className='aboutme-text'>
                                Hello! I’m Dhvani Intwala, a travel lover with a passion for exploring the world. 
                                Through this blog, I share my stories, experiences, and tips to help you discover 
                                new places and cultures. Join me on this adventure as I travel to amazing destinations 
                                and offer you insights on how to make the most of your trips.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;