import React from 'react'
import ServiceBox from './ServiceBox'
import srviceBoxImg1 from '../../assets/icons/icon9.png'

const OurServices = () => {
    return (
        <>
            <section class="our-services">
                <div class="container">
                    <h6>Our Expertise</h6>
                    <h2>Our Services</h2>
                    <div class="service-flex">
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                        <ServiceBox icon={srviceBoxImg1} title='Website Design' description='Lorem ipsum dolor sit amet, tur adipiscing elit, sed do' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurServices
