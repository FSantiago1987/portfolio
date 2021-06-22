import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";
  import {Link} from 'react-scroll';

function Footer() {
    return (
        <div className="footer">
           <div className="container">
               <div className="row">
                   <div className="col-lg-4 col-md-6 col-sm-6">
                       <div className="d-flex">
                           <p>Toronto - Main Street</p>
                       </div>
                       <div className="d-flex">
                           <a href="tel:555-555-5555">+1 (555)555-5555</a>
                       </div>
                       <div className="d-flex">
                           <p>rawpower_br@hotmail.com</p>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-2 col-sm-6">
                       <div className="row">
                           <div className="col">
                               <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                               <br />
                               <Link smooth={true} to="about" offset={-110} className="footer-nav">About Me</Link>
                               <br />
                               <Link smooth={true} to="services" offset={-110} className="footer-nav">Services</Link>
                           </div>
                           <div className="col">
                               <Link smooth={true} to="experiences" offset={-110} className="footer-nav">Experiences</Link>
                               <br />
                               <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                               <br />
                               <Link smooth={true} to="contact" offset={-110} className="footer-nav">Contact Me</Link>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/FSantiago1987"}
                                quote={"FullStack Developer"}
                                hashtag="#react"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://github.com/FSantiago1987"}
                                quote={"FullStack Developer"}
                                hashtag="#react"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                url={"https://github.com/FSantiago1987"}
                                quote={"FullStack Developer"}
                                hashtag="#react"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <WhatsappShareButton
                                url={"https://github.com/FSantiago1987"}
                                quote={"FullStack Developer"}
                                hashtag="#react"
                            >
                                <WhatsappIcon className="mx-3" size={36} />
                            </WhatsappShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Fabio Luiz | All Rights Reserved
                        </p>
                   </div>
               </div>
           </div> 
        </div>
    )
}

export default Footer;
