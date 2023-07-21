import React, { useState } from 'react'
import BannerImg from './BannerImg'
import bannerImg1 from '../../assets/images/colleagues-working.png'

const Banner = () => {

    const [translate, setTranslate] = useState(-3 * window.innerWidth);

    const moveLeft = () => {
        const assigner = translate
        setTranslate(assigner + window.innerWidth);
        if (translate === 0) {
            setTranslate(0)
        }
    }

    const moveRight = () => {
        const assigner = Math.abs(translate)
        setTranslate(- (assigner + window.innerWidth))
        if (translate <= -6 * window.innerWidth) {
            setTranslate(-6 * window.innerWidth)
        }
    }

    return (
        <section className="creative-solutions">
            <div className="creative owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer" style={{ display: '-webkit-box' }}>
                    <div className="owl-stage" style={{ display: 'flex', transform: `translateX(${translate}px)`, transition: 'all 0.25s ease 0s', width: '100%' }}>
                        <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
                        <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
                        <BannerImg className='owl-item active' bgImage={bannerImg1} />
                        <BannerImg className='owl-item' bgImage={bannerImg1} />
                        <BannerImg className='owl-item' bgImage={bannerImg1} />
                        <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
                        <BannerImg className='owl-item cloned' bgImage={bannerImg1} />
                    </div>
                </div>
                <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev" onClick={moveLeft}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next" onClick={moveRight}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
        // <section className="creative-solutions">
        //     <div className="owl-carousel creative owl-theme owl-loaded owl-drag">



        //         <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-1197px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '2793px' }}><div className="owl-item cloned" style={{ width: '389px', marginRight: '10px' }}><div className="banner-image" style={{ backgroundImage: `url(${bannerImg1})` }}>
        //             <div className="item">
        //                 <div className="container">
        //                     <h1>Creative solutions for your
        //                         digital needs</h1>
        //                     <p>We believe in the transformative power of exceptional design and development. Whether it's crafting a stunning website, creating engaging graphics, or developing robust digital solutions
        //                     </p>
        //                     <div className="search-bar">
        //                         <input type="search" placeholder="Want a logo or a website design" /><i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="customers-flex">
        //                         <div className="customers-width">
        //                             <img src="./images/customers.png" alt="lazy" />
        //                         </div>
        //                         <div className="customers-width">
        //                             <span>1200+ Happy Customers</span>
        //                             <br />
        //                             <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div></div><div className="owl-item cloned" style="width: 389px; margin-right: 10px;"><div className="banner-image" style="background-image: url(./images/colleagues-working.png);">
        //             <div className="item">
        //                 <div className="container">
        //                     <h1>Creative solutions for your
        //                         digital needs</h1>
        //                     <p>We believe in the transformative power of exceptional design and development. Whether it's crafting a stunning website, creating engaging graphics, or developing robust digital solutions
        //                     </p>
        //                     <div className="search-bar">
        //                         <input type="search" placeholder="Want a logo or a website design" /><i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="customers-flex">
        //                         <div className="customers-width">
        //                             <img src="./images/customers.png" alt="lazy" />
        //                         </div>
        //                         <div className="customers-width">
        //                             <span>1200+ Happy Customers</span>
        //                             <br />
        //                             <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div></div><div className="owl-item" style="width: 389px; margin-right: 10px;"><div className="banner-image" style="background-image: url(./images/colleagues-working.png);">
        //             <div className="item">
        //                 <div className="container">
        //                     <h1>Creative solutions for your
        //                         digital needs</h1>
        //                     <p>We believe in the transformative power of exceptional design and development. Whether it's crafting a stunning website, creating engaging graphics, or developing robust digital solutions
        //                     </p>
        //                     <div className="search-bar">
        //                         <input type="" placeholder="Want a logo or a website design" /><i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="customers-flex">
        //                         <div className="customers-width">
        //                             <img src="./images/customers.png" alt="lazy" />
        //                         </div>
        //                         <div className="customers-width">
        //                             <span>1200+ Happy Customers</span>
        //                             <br />
        //                             <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div></div><div className="owl-item active" style="width: 389px; margin-right: 10px;"><div className="banner-image" style="background-image: url(./images/colleagues-working.png);">
        //             <div className="item">
        //                 <div className="container">
        //                     <h1>Creative solutions for your
        //                         digital needs</h1>
        //                     <p>We believe in the transformative power of exceptional design and development. Whether it's crafting a stunning website, creating engaging graphics, or developing robust digital solutions
        //                     </p>
        //                     <div className="search-bar">
        //                         <input type="search" placeholder="Want a logo or a website design" /><i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="customers-flex">
        //                         <div className="customers-width">
        //                             <img src="./images/customers.png" alt="lazy" />
        //                         </div>
        //                         <div className="customers-width">
        //                             <span>1200+ Happy Customers</span>
        //                             <br />
        //                             <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div></div><div className="owl-item" style="width: 389px; margin-right: 10px;"><div className="banner-image" style="background-image: url(./images/colleagues-working.png);">
        //             <div className="item">
        //                 <div className="container">
        //                     <h1>Creative solutions for your
        //                         digital needs</h1>
        //                     <p>We believe in the transformative power of exceptional design and development. Whether it's crafting a stunning website, creating engaging graphics, or developing robust digital solutions
        //                     </p>
        //                     <div className="search-bar">
        //                         <input type="search" placeholder="Want a logo or a website design" /><i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="customers-flex">
        //                         <div className="customers-width">
        //                             <img src="./images/customers.png" alt="lazy" />
        //                         </div>
        //                         <div className="customers-width">
        //                             <span>1200+ Happy Customers</span>
        //                             <br />
        //                             <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div></div><div className="owl-item cloned" style="width: 389px; margin-right: 10px;"><div className="banner-image" style="background-image: url(./images/colleagues-working.png);">
        //             <div className="item">
        //                 <div className="container">
        //                     <h1>Creative solutions for your
        //                         digital needs</h1>
        //                     <p>We believe in the transformative power of exceptional design and development. Whether it's crafting a stunning website, creating engaging graphics, or developing robust digital solutions
        //                     </p>
        //                     <div className="search-bar">
        //                         <input type="" placeholder="Want a logo or a website design" /><i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="customers-flex">
        //                         <div className="customers-width">
        //                             <img src="./images/customers.png" alt="lazy" />
        //                         </div>
        //                         <div className="customers-width">
        //                             <span>1200+ Happy Customers</span>
        //                             <br />
        //                             <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div></div><div className="owl-item cloned" style="width: 389px; margin-right: 10px;"><div className="banner-image" style="background-image: url(./images/colleagues-working.png);">
        //             <div className="item">
        //                 <div className="container">
        //                     <h1>Creative solutions for your
        //                         digital needs</h1>
        //                     <p>We believe in the transformative power of exceptional design and development. Whether it's crafting a stunning website, creating engaging graphics, or developing robust digital solutions
        //                     </p>
        //                     <div className="search-bar">
        //                         <input type="search" placeholder="Want a logo or a website design" /><i className="fa-solid fa-magnifying-glass"></i>
        //                     </div>
        //                     <div className="customers-flex">
        //                         <div className="customers-width">
        //                             <img src="./images/customers.png" alt="lazy" />
        //                         </div>
        //                         <div className="customers-width">
        //                             <span>1200+ Happy Customers</span>
        //                             <br />
        //                             <span> <i className="fa-solid fa-star"></i>4.5 (22.5K Reviews)</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><i className="fa-solid fa-arrow-left"></i></button><button type="button" role="presentation" className="owl-next"><i className="fa-solid fa-arrow-right"></i></button></div><div className="owl-dots disabled"></div></div>
        // </section>
    )
}

export default Banner
