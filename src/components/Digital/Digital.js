import React from 'react'
import believeBg from '../../assets/images/believe-banner.png'

const Digital = () => {
    return (
        <>
            <section class="digital">
                <div class="container">
                    <div class="digital-flex">
                        <div class="digital-col">
                            <h2>We Design digital experiences that drive excellent results</h2>
                        </div>
                        <div class="digital-col">
                            <p>Talk to us now</p>
                            <a href="tel:+1 (561) 664-6455">+1 (561) 664-6455</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="we-believe" style={{ backgroundImage: `url(${believeBg})` }}>
                <div class="container">
                    <div class="believe-content">
                        <p>Get in touch with us anytime</p>
                        <h1>we believe that every
                            great project starts with a vision</h1>
                        <a href="#">Get A Quote <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Digital
