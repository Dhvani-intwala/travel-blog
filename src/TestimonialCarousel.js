import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestimonialCarousel.css';

// Testimonial Component
const Testimonial = ({ name, image}) => (
  <div className="box">
    <figure className="image-testi">
      <img className="img-fluid" src={image} alt={name} />
    </figure>
    <div className="test-component">
      <article className="test-title">
        <h4>{name}</h4>
      </article>
    </div>
  </div>
);

const TestimonialCarousel = ({ testimonials }) => {
    const settings = {
      centerMode: true,
      centerPadding: "40px",
      dots: true,
      slidesToShow: 3,
      infinite: true,
      arrows: false, // Disable arrows
      lazyLoad: "ondemand", // Lazy load images
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
};
  

return (
    <div className="testimonial-reel">
      <h1 className="all-title mb-5 mt-5"><span>Popular Travel Destination</span></h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Testimonial image={testimonial.image} name={testimonial.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;