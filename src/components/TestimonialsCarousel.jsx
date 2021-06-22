import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//AVATARS IMPORTS
import avatar1 from "../Assets/Images/avatars/avatar-1.png";
import avatar2 from "../Assets/Images/avatars/avatar-2.png";
import avatar3 from "../Assets/Images/avatars/avatar-3.png";
import avatar4 from "../Assets/Images/avatars/avatar-4.png";

function TestimonialsCarousel() {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="John Doe 1" />
                <div className="testimonials-carousel">
                    <h3>John Doe 1</h3>
                    <p>Lorem sorum dolor Lorem sorum dolorLorem sorum dolorLorem sorum dolor</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="John Doe 2" />
                <div className="testimonials-carousel">                  
                    <h3>John Doe 2</h3>
                    <p>Lorem sorum dolor Lorem sorum dolorLorem sorum dolorLorem sorum dolor</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="John Doe 3" />
                <div className="testimonials-carousel">                   
                    <h3>John Doe 3</h3>
                    <p>Lorem sorum dolor Lorem sorum dolorLorem sorum dolorLorem sorum dolor</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="John Doe 4" />
                <div className="testimonials-carousel">
                    <h3>John Doe 4</h3>
                    <p>Lorem sorum dolor Lorem sorum dolorLorem sorum dolorLorem sorum dolor</p>                   
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel;
