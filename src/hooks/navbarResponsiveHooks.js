import { useState } from 'react';


export const useNavBar = () => {
    const [fixedMenu, setFixed] = useState(false);
    const [sidebarOpened, setSide] = useState(false);

    const hideFixedMenu = () => setFixed(false)
    const showFixedMenu = () => setFixed(true)

    const handleSidebarHide = () => setSide(false)
    const handleToggle = () => setSide(true)

    return {
        fixedMenu,hideFixedMenu,showFixedMenu,
        sidebarOpened,handleSidebarHide,handleToggle
    }
}

