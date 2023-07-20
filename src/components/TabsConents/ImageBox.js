import React from 'react'

const ImageBox = ({ image }) => {
    return (
        <div className="image-box">
            <img src={image} alt="lazy" />
            <p>Illustration Design</p>
            <h5>Stylish Characters Design</h5>
        </div>
    )
}

export default ImageBox
