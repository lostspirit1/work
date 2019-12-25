import React from 'react';
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
  Responsive
} from 'semantic-ui-react'

import {useStickey} from '../../hooks/navbarStickey'
import {fixedMenuStyle,menuStyle} from '../../assets/styles/navBarStyle';

import Logo from '../../assets/images/logo.svg';
import Carousel from '../../assets/components/carousel/index';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const NavBar = () => {
  
    const {menuFixed,stickTopMenu,unStickTopMenu} = useStickey();
    return(
        <>
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container>
              <Menu.Item>
                <Image size='mini' src={Logo}/>
              </Menu.Item>
              <Menu.Item header>Project Name</Menu.Item>
              <Menu.Item as='a'>Blog</Menu.Item>
              <Menu.Item as='a'>Articles</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
              
            </Container>
          </Menu>
         <Visibility
                onBottomPassed={()=>stickTopMenu()}
                onBottomVisible={()=> unStickTopMenu()}
                once={false}
          > 


        </Visibility>
        <Carousel />
        </Responsive>
        </>
    )  
}

export default NavBar;