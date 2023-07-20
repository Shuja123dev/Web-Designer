import React from 'react'
import textIcon from '../../assets/images/text.png'

const TestimonialCard = ({ profPic, rating, name, content }) => {
    return (
        <div class="testimonials-col">
            <div class="left-icon">
                <img src={textIcon} alt="lazy" />
            </div>
            <p>{content}</p>
            <div class="reviews-flex">
                <div class="review-col">
                    <img src={profPic} alt="lazy" />
                </div>
                <div class="review-col">
                    <h6>{name}</h6>
                    <img src={rating} alt="lazy" />
                </div>
            </div>

        </div>
    )
}

export default TestimonialCard
