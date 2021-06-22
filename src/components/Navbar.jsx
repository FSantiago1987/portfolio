import React from 'react';
import DeLorian from '../Assets/Images/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link smooth={true} to="home" offset={-110} className="navbar-brand" href="home">
            <img src={DeLorian} alt="My logo" className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} className="toggler" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth={true} to="home" offset={-110} className="nav-link" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About Me</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="experiences" offset={-110} className="nav-link" href="#">Experiences</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact Me</Link>
              </li>
             </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
