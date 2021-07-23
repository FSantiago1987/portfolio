import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-scroll'

function Header() {
    return (
        <div id="home" className="header-wrapper">
            <div className="header-main-info">
                <canvas></canvas>
                <h1>Hi, I am Fabio</h1>
                <Typed 
                    className="header-typed-text"
                    strings={["Web Design", "Web Developer", "Full-Stack Developer"]}
                    typeSpeed={80}
                    backSpeed={70}
                    loop
                />
                <Link smooth={true} to="contact" offset={-110} className="header-btn-main-offer" href="#">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
