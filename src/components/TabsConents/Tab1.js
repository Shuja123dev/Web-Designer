import React from 'react'
import box1img from '../../assets/images/tabbing.png'
import ImageBox from './ImageBox'

const Tab1 = () => {
    return (
        <>
            <div id="tab-1" class="tab-content current">
                <div class="tabbing-flex">
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
        </>
    )
}

export default Tab1
