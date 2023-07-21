import React, { useContext } from 'react'
import { TabSwitchContext } from '../../context/TabSwitcher'

const TabsContainer = () => {

    const { tabComponent } = useContext(TabSwitchContext)

    return (
        <>
            <div className="tabbing-content">
                <p>Our Recent Work</p>
                <h2>What do you need designed?</h2>
            </div>
            <div className="container">
                {tabComponent}
            </div>
        </>
    )
}

export default TabsContainer
