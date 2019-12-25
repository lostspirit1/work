import React from 'react';

import {
    Image
  } from 'semantic-ui-react'

export const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }
  
export  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }
  
export  const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
  }
  
  export const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
  }
  
  export const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
  }
  
  export const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
  }
  
  export const LeftImage = () => (
    <Image
      floated='left'
      size='medium'
      src='/images/wireframe/square-image.png'
      style={{ margin: '2em 2em 2em -4em' }}
    />
  )
  
  export const RightImage = () => (
    <Image
      floated='right'
      size='medium'
      src='/images/wireframe/square-image.png'
      style={{ margin: '2em -4em 2em 2em' }}
    />
  )
  
  export const Paragraph = () => (
    <p>
      {[
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
        'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
        'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
        'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
        'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
        'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
        'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
        'accumsan porttitor, facilisis luctus, metus',
      ].join('')}
    </p>
  )