import React from 'react';
import Typed from 'react-typed';


function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-main-info">
                <h1>Vamos Flamengo</h1>
                <Typed 
                    className="header-typed-text"
                    strings={["Web Design", "Web Development", "MERN Developer", "Full-Stack Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="header-btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
