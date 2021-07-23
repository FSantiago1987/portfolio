import React from "react";
import PortfolioHtml from "../Assets/Images/portfolio-html.jpg";
import DogYou from "../Assets/Images/dogyou-html.jpg";
import DrumKit from "../Assets/Images/drum-javascript.jpg";
import SimonGame from "../Assets/Images/simon-game.jpg";
import DriveBuddy from "../Assets/Images/drive-buddy.jpg";
import IncidentManager from "../Assets/Images/incident.jpg";
import LinkedIn from "../Assets/Images/linkedin.jpg";
import BetaFolks from "../Assets/Images/beta-folks.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX IMPORTS
import { PopupboxContainer, PopupboxManager } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Portfolio() {
  // Project 1
  function openPopupBoxProject(image, github, link, title, description) {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={image} alt={title} />
        <p className="description-project">{description}</p>
        <p>
          <b>GitHub Code:</b>
          <span className="link-project">
            <a
              className="hyper-link"
              onClick={() => window.open(`${github}`, "_blank")}
            >
              {github}
            </a>
          </span>
        </p>
        <p>
          <b>Website Link:</b>
          <span className="link-project">
            <a
              className="hyper-link"
              onClick={() => window.open(`${link}`, "_blank")}
            >
              {link}
            </a>
          </span>
        </p>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: title,
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                PortfolioHtml,
                "https://github.com/FSantiago1987/CSS---My-Personal-Site",
                "https://fsantiago1987.github.io/CSS---My-Personal-Site/",
                "Portfolio - HTML & CSS",
                "Website Portfolio created using HTML & CSS styles code. Hosted in GitHub pages. Version Control: GitHub"
              );
            }}
          >
            <img
              className="portfolio-image"
              src={PortfolioHtml}
              alt="Portfolio HTML"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                DogYou,
                "https://github.com/FSantiago1987/Dog-You-",
                "https://fsantiago1987.github.io/Dog-You-/",
                "Dog You - HTML, BootStrap & CSS",
                "Sample Website created using HTML, BootStrap & CSS styles code. Hosted in GitHub pages. Version Control: GitHub"
              );
            }}
          >
            <img className="portfolio-image" src={DogYou} alt="DogYou" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                DrumKit,
                "https://github.com/FSantiago1987/DrumKit",
                "https://fsantiago1987.github.io/DrumKit/",
                "Drum Kit - JavaScript",
                "Sample Website created using HTML, JavaScript & CSS styles code. Hosted in GitHub pages. Version Control: GitHub"
              );
            }}
          >
            <img className="portfolio-image" src={DrumKit} alt="Drum Kit" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                SimonGame,
                "https://github.com/FSantiago1987/SimonGame",
                "https://fsantiago1987.github.io/SimonGame/",
                "Simon Game - jQuery",
                "Game created using HTML and jQuery. Hosted in GitHub pages. Version Control: GitHub"
              );
            }}
          >
            <img className="portfolio-image" src={SimonGame} alt="Simon Game" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                DriveBuddy,
                "https://github.com/DriveBuddy-Comp231/drive-buddy-project",
                "https://drive-buddy.herokuapp.com/",
                "DriveBuddy - NodeJS & ReactJS",
                "Created in Group by: Fabio Luiz, Clara Magaldi, Thiago Batista, Alfredo Neto, Asif Ferdous, Jean Mello and Prab Kaur"
              );
            }}
          >
            <img className="portfolio-image" src={DriveBuddy} alt="Drive Buddy" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                IncidentManager,
                "https://github.com/FSantiago1987/Comp229-Incident-Management",
                "https://compp229-incident-management.herokuapp.com/",
                "Incident Manager - NodeJS & Angular",
                "Created in Group by: Fabio Luiz, Zhen Wang, Phan Vo, Franz Cadiente, Abdullah Syed and Prab Kaur"
              );
            }}
          >
            <img className="portfolio-image" src={IncidentManager} alt="Incident Manager" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                LinkedIn,
                "https://github.com/FSantiago1987/linkedin-clone",
                "https://linkedin-clone-128aa.web.app/",
                "LinkedIn Clone - ReactJS & Redux",
                "LinkedIn Clone created using ReactJS, NestJS, Redux, Firebase Database. Hosted in Firebase. Version Control: GitHub"
              );
            }}
          >
            <img className="portfolio-image" src={LinkedIn} alt="Drum Kit" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={() => {
              openPopupBoxProject(
                BetaFolks,
                "https://github.com/FSantiago1987/BetaFolksProject",
                "https://fsantiago1987.github.io/BetaFolksProject/",
                "Beta Folks - React JS, Styled Components & Tailwind",
                "Sample Website created using React JS, Styled Components & Tailwind. Hosted in GitHub pages. Version Control: GitHub"
              );
            }}
          >
            <img className="portfolio-image" src={BetaFolks} alt="Beta Folks" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
        </div>

        <PopupboxContainer />
      </div>
    </div>
  );
}

export default Portfolio;
