import React, { useContext } from 'react'
import showAll from '../../assets/icons/icon1.png'
import logoBranding from '../../assets/icons/icons.png'
import websiteIcon from '../../assets/icons/icon3.png'
import socialMedia from '../../assets/icons/icon4.png'
import uiUx from '../../assets/icons/icon5.png'
import illustrations from '../../assets/icons/icon6.png'
import imageEditing from '../../assets/icons/icon7.png'
import gameDesign from '../../assets/icons/icon8.png'
import graphicDesign from '../../assets/icons/icon9.png'
import { NavLink } from 'react-router-dom'
import { TabSwitchContext } from '../../context/TabSwitcher'
import Tab2 from '../TabsConents/Tab2'
import Tab3 from '../TabsConents/Tab3'
import Tab4 from '../TabsConents/Tab4'
import Tab5 from '../TabsConents/Tab5'
import Tab6 from '../TabsConents/Tab6'
import Tab7 from '../TabsConents/Tab7'
import Tab8 from '../TabsConents/Tab8'
import Tab9 from '../TabsConents/Tab9'

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
                <Tab2 />
                <Tab3 />
                <Tab4 />
                <Tab5 />
                <Tab6 />
                <Tab7 />
                <Tab8 />
                <Tab9 />
            </>
        )
    }
    const showTab2 = (id) => {
        checkClass(id);
        setTabComponent(<Tab2 />);
    }
    const showTab3 = (id) => {
        checkClass(id);
        setTabComponent(<Tab3 />);
    }
    const showTab4 = (id) => {
        checkClass(id)
        setTabComponent(<Tab4 />);
    }
    const showTab5 = (id) => {
        checkClass(id)
        setTabComponent(<Tab5 />);
    }
    const showTab6 = (id) => {
        checkClass(id)
        setTabComponent(<Tab6 />);
    }
    const showTab7 = (id) => {
        checkClass(id)
        setTabComponent(<Tab7 />);
    }
    const showTab8 = (id) => {
        checkClass(id)
        setTabComponent(<Tab8 />);
    }
    const showTab9 = (id) => {
        checkClass(id)
        setTabComponent(<Tab9 />);
    }
    return (
        <>
            <ul className="tabs" id='tabsCotainer'>
                <li className="tab-link current" onClick={() => showAllTabs('tab-1')} id="tab-1"><NavLink to='/'><img src={showAll}
                    alt="lazy" /></NavLink>Show All</li>
                <li className="tab-link" onClick={() => showTab2('tab-2')} id="tab-2"><NavLink to='/'><img src={logoBranding}
                    alt="lazy" /></NavLink>Logo & Branding</li>
                <li className="tab-link" onClick={() => showTab3('tab-3')} id="tab-3"><NavLink to='/'><img src={websiteIcon}
                    alt="lazy" /></NavLink>Website Design <ul className="sub-tabbing" style={{ top: '50px', left: '0' }}>
                        <li><NavLink to='/'>React </NavLink></li>
                        <li><NavLink to='/'>Angular</NavLink></li>
                        <li><NavLink to='/'>Next JS</NavLink></li>
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
