import React from 'react'
import box1img from '../../assets/images/tabbing.png'
import ImageBox from './ImageBox'

const Tab2 = () => {
    return (
        <>
            <div id="tab-2" className="tab-content">
                <div className="tabbing-flex">
                    <div className="image-box">
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                        <ImageBox image={box1img} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab2
