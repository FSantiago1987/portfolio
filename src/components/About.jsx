import React from 'react';
import MyPicture from '../Assets/Images/Me.jpg';

function About() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                        <img className="about-img" src={MyPicture} alt="Author" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
