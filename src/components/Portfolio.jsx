import React from 'react';
import Project1 from '../Assets/Images/project1.png';
import Project2 from '../Assets/Images/project2.jpg';
import Project3 from '../Assets/Images/project3.jpg';
import Project4 from '../Assets/Images/service1.jpeg';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX IMPORTS
import { PopupboxContainer, PopupboxManager } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

function Portfolio() {

    // Project 1
    function openPopupBoxProject(image, link, title, description)  {
       const content = (
        <>
        <img className="portfolio-image-popupbox" src={image} alt={title} />
        <p>{description}</p>
        <b>GitHub:</b><a className="hyper-link" onClick={() => window.open(`${link}`, "_blank")}>{link}</a>
        </>
        ) 
        PopupboxManager.open({
            content,
            config: {
                titleBar: {
                  enable: true,
                  text: title
                },
                fadeIn: true,
                fadeInSpeed: 500
              }
        });
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row row-cols-auto justify-content-center">
                    <div className="portfolio-image-box" onClick={() => {openPopupBoxProject(Project1, "https://github.com/", "Project 1")}}>
                        <img className="portfolio-image" src={Project1} alt="Project1" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={() => {openPopupBoxProject(Project2, "https://github.com/", "Project 2")}}>
                        <img className="portfolio-image" src={Project2} alt="Project2" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={() => {openPopupBoxProject(Project3, "https://github.com/", "Project 3")}}>
                        <img className="portfolio-image" src={Project3} alt="Project3" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={() => {openPopupBoxProject(Project4, "https://github.com/", "Project 4")}}>
                        <img className="portfolio-image" src={Project4} alt="Project4" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
                <PopupboxContainer />
            </div>
        </div>
    )
}

export default Portfolio;
