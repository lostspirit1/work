import React from 'react';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import { Responsive } from 'semantic-ui-react';
const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }

const NavBar = () => {
    return(
        <>
        <DesktopNav/>
        <MobileNav/>
        </>
    )  
}

export default NavBar;