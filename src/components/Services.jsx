import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Web Design</h3>
                                <p>Bring your ideas to life with our web design services.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Modern Technologies</h3>
                                <p>We use modern technologies to build your website.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faMobileAlt} size="2x"/>
                                </div>
                                <h3>Mobile Friendly</h3>
                                <p>Website completly mobile responsive.</p>
                            </div>
                        </div>
                        {/* - */}

                        {/* - */}
                    </div>
                </div>
            </div>
    )
}


export default Services;
