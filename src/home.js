import React from 'react';
import './home.css';
import mainImage from './assets/main1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    
    return (
        <div className="container-first">
            <img src={mainImage} alt="MainImage" className="main-image" />
            <h1 className='centered-title'>Explore.Dream.Discover.</h1>
            <h3 className='centered'>Explore the world, one destination at a time.</h3>
            <button type="button" className='exploring-btn'>Start Exploring</button>

            
            <div className='mt-3'>
                <h1 className='featured-title'><span>Featured</span></h1>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            One of three columns
                        </div>
                        <div class="col-sm">
                            One of three columns
                        </div>
                        <div class="col-sm">
                            One of three columns
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

        
    );
}

export default Home;