import React from 'react'
import believeBg from '../../assets/images/believe-banner.png'

const Digital = () => {
    return (
        <>
            <section className="digital">
                <div className="container">
                    <div className="digital-flex">
                        <div className="digital-col">
                            <h2>We Design digital experiences that drive excellent results</h2>
                        </div>
                        <div className="digital-col">
                            <p>Talk to us now</p>
                            <a href="tel:+1 (561) 664-6455">+1 (561) 664-6455</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="we-believe" style={{ backgroundImage: `url(${believeBg})` }}>
                <div className="container">
                    <div className="believe-content">
                        <p>Get in touch with us anytime</p>
                        <h1>we believe that every
                            great project starts with a vision</h1>
                        <a href="#">Get A Quote <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Digital
