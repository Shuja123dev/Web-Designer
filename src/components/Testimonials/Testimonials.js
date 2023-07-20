import React from 'react'
import test1Stars from '../../assets/images/black-stars.png'
import test1ProfPic from '../../assets/images/carl.png'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <>
            <section class="testimonials">
                <div class="container">
                    <div class="testimoniasl-text">
                        <p>Testimonials</p>
                        <h2>What Are Customer
                            Say About Us</h2>
                    </div>
                    <div class="testimonials-flex">
                        <TestimonialCard name='Carl Hooper' profPic={test1ProfPic} rating={test1Stars} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' />
                        <TestimonialCard name='Carl Hooper' profPic={test1ProfPic} rating={test1Stars} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' />
                        <TestimonialCard name='Carl Hooper' profPic={test1ProfPic} rating={test1Stars} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
