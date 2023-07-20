import React from 'react'
import BannerImg from './BannerImg'
import bannerImg1 from '../../assets/images/colleagues-working.png'

const Banner = () => {
    return (
        <section className="creative-solutions">
            <div className="owl-carousel creative owl-theme">
                <BannerImg bgImage={bannerImg1} />
                <BannerImg bgImage={bannerImg1} />
                <BannerImg bgImage={bannerImg1} />
            </div>
        </section>
    )
}

export default Banner
