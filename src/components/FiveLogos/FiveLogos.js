import React from 'react'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'

const FiveLogos = () => {
    return (
        <>
            <section className="five-logos">
                <div className="container">
                    <div className="five-logos-flex">
                        <div className="five-logos-width">
                            <img src={logo1} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo2} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo3} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo4} alt="lazy" />
                        </div>
                        <div className="five-logos-width">
                            <img src={logo5} alt="lazy" />
                        </div>
                    </div>
                    <div className="mobile-logo-slider">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo1} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo2} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo3} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo4} alt="lazy" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="mobile-slider">
                                    <img src={logo5} alt="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FiveLogos
