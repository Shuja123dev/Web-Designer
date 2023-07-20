import React from 'react'
import headerLogo from '../../assets/images/header-logo.png'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-flex">
                    <div className="footer-col">
                        <img src={headerLogo} alt="lazy" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h5>Services</h5>
                            <li><a href="#">Ui Ux Design</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">WordPress Design</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h5>Services</h5>
                            <li><a href="#">Ui Ux Design</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">WordPress Design</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h5>Let's Connect</h5>
                            <div className="lets-connect">
                                <div className="lets-col">
                                    <a href="tel:+4733378901"><i className="fa-solid fa-phone"></i> +47 333 78 901</a>
                                </div>
                                <div className="lets-col">
                                    <a href="mailto:support@web_designrr.com"><i className="fa-solid fa-envelope"></i>
                                        support@web_designrr.com</a>
                                </div>
                            </div>
                            <div className="fti-icons">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© Copyright 2023 by Web Designrrr</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
