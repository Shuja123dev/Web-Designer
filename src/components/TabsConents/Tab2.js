import React from 'react'
import box1img from '../../assets/images/tabbing.png'
import ImageBox from './ImageBox'

const Tab2 = () => {
    return (
        <>
            <div id="tab-2" class="tab-content">
                <div class="tabbing-flex">
                    <div class="image-box">
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
