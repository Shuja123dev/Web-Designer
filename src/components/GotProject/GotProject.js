import React from 'react'
import dottedBg from '../../assets/images/dottet-background.png'
import objectImg from '../../assets/images/Object.png'

const GotProject = () => {
    return (
        <>
            <section class="got-project" style={{ backgroundImage: `url(${dottedBg})` }}>
                <div class="container">
                    <div class="got-project-flex">
                        <div class="got-project-col">
                            <h2>Got a project
                                in your mind</h2>
                            <p>If you've got a project in mind, now is the time to turn that idea into
                                a reality. Whether it's a website, app, or graphic design project, taking
                                the first step towards making your vision a reality is often the hardest
                                part. But with the right team behind you, the process can be smooth
                                and stress-free.</p>
                            <a href="#">Talk To Us<i class="fa-solid fa-arrow-right"></i> </a>
                        </div>
                        <div class="got-project-col">
                            <img src={objectImg} alt="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GotProject
