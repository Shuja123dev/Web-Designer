import React from 'react'
import gitImg from '../../assets/images/get-in-touch.png'

const Contact = () => {
    return (
        <>
            <section class="get-in-touch">
                <div class="get-touch-flex">
                    <div class="get-col">
                        <div class="touch-text">
                            <p>Contact Now</p>
                            <h2>Get in touch with us</h2>
                        </div>
                        <form action="">
                            <div class="input-flex">
                                <div class="input-col">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div class="input-col">
                                    <input type="email" placeholder="Enter Email" />
                                </div>
                                <div class="input-col">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div class="input-col">
                                    <input type="tel" placeholder="Phone" />
                                </div>
                                <div class="input-col">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="submit-button">
                                <a style={{ cursor: 'pointer' }}>Send Message <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </form>
                    </div>
                    <div class="get-col">
                        <img src={gitImg} alt="lazy" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
