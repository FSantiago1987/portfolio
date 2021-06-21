import React from 'react';
import DeLorian from '../Assets/Images/logo.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand" href="home">
            <img src={DeLorian} alt="My logo" className="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} className="toggler" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projects">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">Contact Me</a>
              </li>
             </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
