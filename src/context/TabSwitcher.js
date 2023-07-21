import { createContext, useState } from 'react'
import Tab1 from '../components/TabsConents/Tab1';
import Tab2 from '../components/TabsConents/Tab2';

const TabSwitchContext = createContext();

const TabSwitcher = ({ children }) => {
    const [tabComponent, setTabComponent] = useState(
        <>
            <Tab1 />
            <Tab2 />
        </>
    );
    return (
        <TabSwitchContext.Provider value={{ tabComponent, setTabComponent }}>
            {children}
        </TabSwitchContext.Provider>
    )
}

export default TabSwitcher
export { TabSwitchContext }