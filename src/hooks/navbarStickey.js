import { useState } from 'react';
import _ from 'lodash';


export const useStickey = () => {
    const [menuFixed, setMenuFixed] = useState(false);
    const [overlayFixed, setOverlayFixed] = useState(false);
    const [overlayRect, setOverlayRect] = useState(false);

    const stickOverlay = () => setOverlayFixed(true)
  
    const stickTopMenu = () => setMenuFixed(true)
  
    const unStickOverlay = () => setOverlayFixed(false)
  
    const unStickTopMenu = () => setMenuFixed(false)

    const handleOverlayRef = (value) => {
        if (!overlayRect) {
          setOverlayRect({ overlayRect: _.pick(value.current.getBoundingClientRect(), 'height', 'width') })
        }
      }

    return {
        menuFixed,
        overlayFixed,
        overlayRect,
        stickOverlay,stickTopMenu,unStickOverlay,unStickTopMenu,
        handleOverlayRef
    }
}

