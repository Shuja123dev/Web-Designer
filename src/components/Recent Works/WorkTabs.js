import React, { useContext } from 'react'
import showAll from '../../assets/icons/icon1.png'
import logoBranding from '../../assets/icons/icon2.png'
import websiteIcon from '../../assets/icons/icon3.png'
import socialMedia from '../../assets/icons/icon4.png'
import uiUx from '../../assets/icons/icon5.png'
import illustrations from '../../assets/icons/icon6.png'
import imageEditing from '../../assets/icons/icon7.png'
import gameDesign from '../../assets/icons/icon8.png'
import graphicDesign from '../../assets/icons/icon9.png'
import { NavLink } from 'react-router-dom'
import { TabSwitchContext } from '../../context/TabSwitcher'
import Tab1 from '../TabsConents/Tab1'
import Tab2 from '../TabsConents/Tab2'

const WorkTabs = () => {

    const { setTabComponent } = useContext(TabSwitchContext);

    const checkClass = (id) => {
        const tabContainer = document.getElementById('tabsCotainer');
        const classElement = tabContainer.querySelector('.current');
        classElement.classList.remove('current');
        document.getElementById(id).classList.add('current')
    }

    const showAllTabs = (id) => {
        checkClass(id);
        setTabComponent(
            <>
                <Tab1 />
                <Tab2 />
            </>
        )
    }
    const showTab2 = (id) => {
        checkClass(id);
        setTabComponent(<Tab1 />);
    }
    const showTab3 = (id) => {
        checkClass(id);
        setTabComponent(<Tab2 />)
    }
    const showTab4 = (id) => {
        checkClass(id)
    }
    const showTab5 = (id) => {
        checkClass(id)
    }
    const showTab6 = (id) => {
        checkClass(id)
    }
    const showTab7 = (id) => {
        checkClass(id)
    }
    const showTab8 = (id) => {
        checkClass(id)
    }
    const showTab9 = (id) => {
        checkClass(id)
    }
    return (
        <>
            <ul className="tabs" id='tabsCotainer'>
                <li className="tab-link current" onClick={() => showAllTabs('tab-1')} id="tab-1"><NavLink to='/'><img src={showAll}
                    alt="lazy" /></NavLink>Show All</li>
                <li className="tab-link" onClick={() => showTab2('tab-2')} id="tab-2"><NavLink to='/'><img src={logoBranding}
                    alt="lazy" /></NavLink>Logo & Branding</li>
                <li className="tab-link" onClick={() => showTab3('tab-3')} id="tab-3"><NavLink to='/'><img src={websiteIcon}
                    alt="lazy" /></NavLink>Website Design <ul className="sub-tabbing">
                        <li><NavLink to='/'>items</NavLink></li>
                        <li><NavLink to='/'>items</NavLink></li>
                        <li><NavLink to='/'>items</NavLink></li>
                    </ul></li>
                <li className="tab-link" onClick={() => showTab4('tab-4')} id="tab-4"><NavLink to='/'><img src={socialMedia}
                    alt="lazy" /></NavLink>Social Media Design</li>
                <li className="tab-link" onClick={() => showTab5('tab-5')} id="tab-5"><NavLink to='/'><img src={uiUx} alt='lazy' /></NavLink>Ui Ux
                    Design</li>
                <li className="tab-link" onClick={() => showTab6('tab-6')} id="tab-6"><NavLink to='/'><img src={illustrations}
                    alt="lazy" /></NavLink>Illustrations</li>
                <li className="tab-link" onClick={() => showTab7('tab-7')} id="tab-7"><NavLink to='/'><img src={imageEditing}
                    alt="lazy" /></NavLink>Image Editing</li>
                <li className="tab-link" onClick={() => showTab8('tab-8')} id="tab-8"><NavLink to='/'><img src={gameDesign}
                    alt="lazy" /></NavLink>Game Design</li>
                <li className="tab-link" onClick={() => showTab9('tab-9')} id="tab-9"><NavLink to='/'><img src={graphicDesign}
                    alt="lazy" /></NavLink>Graphic Design</li>
            </ul>
        </>
    )
}

export default WorkTabs
