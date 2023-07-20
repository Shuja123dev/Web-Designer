import React from 'react'

const ServiceBox = ({ icon, title, description }) => {
    return (
        <div class="service-box">
            <div class="top-icon">
                <img src={icon} alt="lazy" />
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
            <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    )
}

export default ServiceBox
