import React from "react";
import MyPicture from "../Assets/Images/Me.jpg";

function About() {
  return (
    <div id="about" className="container py-5">
      <h1 className="about-heading">About Me</h1>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="about-img" src={MyPicture} alt="Author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12 about-description">
          <p>
            I am a driven Web Developer with the ability to adapt to any
            situation and proven potential to grow myself and others. Offering
            reliability, punctuality, and attention to detail, with dynamic
            problem solving and customer service talents.<br /> I've recently
            graduated from Centennial College on the Software Engineering
            Technician program. I am from Rio de Janeiro, Brazil. I seek to
            improve my programming language skills and become a good programmer.<br /> 
            My focus is to try to always search for opportunities to grow and
            learn the trending new technologies as much as possible. I would
            like to learn more about Python and Machine Learning in the future.
            Also, I want to create reliable and meaningful software
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
