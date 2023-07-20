import React from 'react'
import screens from '../../assets/images/screens.png'
import screen2 from '../../assets/images/screen-two.png'

const MobileResponsive = () => {
    return (
        <section class="mobile-resposive">
            <div class="container">
                <div class="mobile-reponsive-flex">
                    <div class="mobile-responsive-col">
                        <h2>Mobile First Responsive
                            Design</h2>
                        <p>In today's mobile-first world, businesses cannot afford to ignore the
                            importance of mobile-first responsive design. By prioritizing mobile
                            devices and designing with a responsive approach, businesses can
                            create a seamless user experience that sets them apart from the
                            competition and drives success online.</p>
                        <img src={screens} alt="lazy" />
                    </div>
                    <div class="mobile-responsive-col">
                        <img src={screen2} alt="lazy" />
                        <h2>Work Directly with
                            your designer</h2>
                        <p>Working directly with your designer can have numerous benefits when it
                            comes to creating a successful design project. When you work directly
                            with a designer, you are able to communicate your vision and goals more
                            clearly, and they can offer feedback and suggestions based on their
                            expertise and experience. This direct collaboration allows for a more
                            personalized and tailored approach to your design project.</p>
                        <a href="#">Start Project<i class="fa-solid fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileResponsive
