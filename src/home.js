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
                                Through this blog, I share my journey, offering a glimpse into the wonders I’ve 
                                discovered, whether it’s hiking in remote mountain ranges, tasting street food in bustling markets,
                                or wandering through ancient cities.
                            </p>
                           <p className='aboutme-text'>
                                I believe that travel is more than just visiting new places—it's about the experiences, the people you meet,
                                and the stories that unfold along the way. I’m passionate about capturing those moments and turning them into
                                guides, tips, and personal stories that I hope will inspire others to step out of their comfort zones and see
                                the world from a different perspective.

                            </p> 

                            <p className='aboutme-text'>
                                Whether you’re planning your first adventure or you're an experienced traveler looking for fresh ideas, my goal is to 
                                provide you with inspiration and practical advice.
                            </p>

                            <p className='aboutme-text'>
                                Join me as I continue this journey, and let’s explore the world together! Feel free to subscribe to my blog or drop me a message if you have any questions or want to share your own travel stories.
                                Let’s make the world our playground!
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;