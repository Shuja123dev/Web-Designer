import React from 'react'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'

const FiveLogos = () => {
    return (
        <>
            <section class="five-logos">
                <div class="container">
                    <div class="five-logos-flex">
                        <div class="five-logos-width">
                            <img src={logo1} alt="lazy" />
                        </div>
                        <div class="five-logos-width">
                            <img src={logo2} alt="lazy" />
                        </div>
                        <div class="five-logos-width">
                            <img src={logo3} alt="lazy" />
                        </div>
                        <div class="five-logos-width">
                            <img src={logo4} alt="lazy" />
                        </div>
                        <div class="five-logos-width">
                            <img src={logo5} alt="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FiveLogos
