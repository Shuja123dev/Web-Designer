import React from 'react'
import haederLogo from '../../assets/images/header-logo.png'

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="black-color">
                    <div className="header-top-flex">
                        <div className="header-top-text">
                            <p>Bringing your digital vision to life</p>
                        </div>
                        <div className="header-top-icons">
                            <p>Follow Us On: </p>
                            <div className="social-media-links">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-logo-content">
                    <div className="container">
                        <div className="logo-content-flex">
                            <div className="header-logo-width">
                                <a href="#">
                                    <img src={haederLogo} alt="lazy" />
                                </a>
                            </div>
                            <div className="header-logo-width">
                                <div className="contact-icon-flex">
                                    <div className="contact-icon-width">
                                        <div className="phone-icon">
                                            <a href="#"><i className="fa-solid fa-phone"></i></a>
                                        </div>
                                        <div className="phone-text">
                                            <a href="#">Call us Anytime</a><br />
                                            <a href="tel:+4733378901">+47 333 78 901</a>
                                        </div>
                                    </div>
                                    <div className="contact-icon-width">
                                        <div className="phone-icon">
                                            <a href="#"><i className="fa-solid fa-envelope"></i></a>
                                        </div>
                                        <div className="phone-text">
                                            <a href="#">Mail Us For Support</a><br />
                                            <a href="mailto:support@web_designrr.com">support@web_designrr.com</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-nav">
                            <div className="menu-icon menu-icon-3">
                                <div className="bar bar-1"></div>
                                <div className="bar bar-2"></div>
                                <div className="bar bar-3"></div>
                            </div>
                            <ul className="nav-flex">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Testimonial</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
