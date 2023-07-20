import React from 'react'
import showAll from '../../assets/icons/icon1.png'
import logoBranding from '../../assets/icons/icon2.png'
import websiteIcon from '../../assets/icons/icon3.png'
import socialMedia from '../../assets/icons/icon4.png'
import uiUx from '../../assets/icons/icon5.png'
import illustrations from '../../assets/icons/icon6.png'
import imageEditing from '../../assets/icons/icon7.png'
import gameDesign from '../../assets/icons/icon8.png'
import graphicDesign from '../../assets/icons/icon9.png'

const WorkTabs = () => {
    return (
        <>
            <ul className="tabs">
                <li className="tab-link current" data-tab="tab-1"><a href="#"><img src={showAll}
                    alt="lazy" /></a>Show All</li>
                <li className="tab-link" data-tab="tab-2"><a href="#"><img src={logoBranding}
                    alt="lazy" /></a>Logo & Branding</li>
                <li className="tab-link" data-tab="tab-3"><a href="#"><img src={websiteIcon}
                    alt="lazy" /></a>Website Design <ul className="sub-tabbing">
                        <li><a href="#.">items</a></li>
                        <li><a href="#.">items</a></li>
                        <li><a href="#.">items</a></li>
                    </ul></li>
                <li className="tab-link" data-tab="tab-4"><a href="#"><img src={socialMedia}
                    alt="lazy" /></a>Social Media Design</li>
                <li className="tab-link" data-tab="tab-5"><a href="#"><img src={uiUx} /></a>Ui Ux
                    Design</li>
                <li className="tab-link" data-tab="tab-6"><a href="#"><img src={illustrations}
                    alt="lazy" /></a>Illustrations</li>
                <li className="tab-link" data-tab="tab-7"><a href="#"><img src={imageEditing}
                    alt="lazy" /></a>Image Editing</li>
                <li className="tab-link" data-tab="tab-8"><a href="#"><img src={gameDesign}
                    alt="lazy" /></a>Game Design</li>
                <li className="tab-link" data-tab="tab-9"><a href="#"><img src={graphicDesign}
                    alt="lazy" /></a>Graphic Design</li>
            </ul>
            <div className="tabbing-content">
                <p>Our Recent Work</p>
                <h2>What do you need designed?</h2>
            </div>
        </>
    )
}

export default WorkTabs
