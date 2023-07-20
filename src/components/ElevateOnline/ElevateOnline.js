import React from 'react'
import boyImg from '../../assets/images/boy.png'
import videoImg from '../../assets/images/video-image.png'
import paintImg from '../../assets/images/paint.png'
import psImg from '../../assets/images/ps.png'
import servicesImg from '../../assets/images/services.png'
import artImg from '../../assets/images/art.png'

const ElevateOnline = () => {
    return (
        <>
            <section class="elevate-online">
                <div class="container">
                    <div class="elevate-flex">
                        <div class="elevate-width">
                            <img src={boyImg} alt="lazy" />
                            <div class="girl-video" data-position>
                                <img src={videoImg} alt="lazy" />
                                <a class="fancy-box-video" data-fancybox
                                    href="https://www.youtube.com/watch?v=K4TOrB7at0Y&ab_channel=StealthMediaLTD">
                                    <span> <i class="fa-solid fa-play"></i> </span>
                                </a>
                            </div>
                        </div>
                        <div class="elevate-width">
                            <h6>About Us</h6>
                            <h2>Elevate your <strong> online
                                presence</strong> with our
                                expertise</h2>
                            <p>
                                We take pride in collaborating closely with our clients to truly understand
                                their unique needs and goals, and then leveraging our expertise to create
                                digital experiences that inspire and engage audiences. With Web Designrr
                                , you can trust that you're getting innovative.</p>
                            <div class="four-icons-flex">
                                <div class="icons">
                                    <div class="four-icons-width">
                                        <img src={paintImg} alt="lazy" />
                                    </div>
                                    <div class="four-icons-width">
                                        <img src={psImg} alt="lazy" />
                                    </div>
                                    <div class="four-icons-width">
                                        <img src={servicesImg} alt="lazy" />
                                    </div>
                                    <div class="four-icons-width">
                                        <img src={artImg} alt="lazy" />
                                    </div>
                                </div>
                                <div class="icons-text">
                                    <p>10+ Excellent Services</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ElevateOnline
