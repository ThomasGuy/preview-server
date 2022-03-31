import React, { useEffect, useState } from 'react';
import Modal from '.';

function GalleryModal({ children, idx }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(idx);
  console.log('children ', children);
  // useEffect(() => {
  //   // Check if pointer events are supported.
  //   if (window.PointerEvent) {
  //     // Add Pointer Event Listener
  //     swipeFrontElement.addEventListener(
  //       'pointerdown',
  //       handleGestureStart,
  //       true
  //     );
  //     swipeFrontElement.addEventListener(
  //       'pointermove',
  //       handleGestureMove,
  //       true
  //     );
  //     swipeFrontElement.addEventListener('pointerup', handleGestureEnd, true);
  //     swipeFrontElement.addEventListener(
  //       'pointercancel',
  //       handleGestureEnd,
  //       true
  //     );
  //   } else {
  //     // Add Touch Listener
  //     swipeFrontElement.addEventListener(
  //       'touchstart',
  //       handleGestureStart,
  //       true
  //     );
  //     swipeFrontElement.addEventListener('touchmove', handleGestureMove, true);
  //     swipeFrontElement.addEventListener('touchend', handleGestureEnd, true);
  //     swipeFrontElement.addEventListener('touchcancel', handleGestureEnd, true);

  //     // Add Mouse Listener
  //     swipeFrontElement.addEventListener('mousedown', handleGestureStart, true);
  //   }
  // }, []);

  return (
    <div>
      {children}
      {open && (
        <Modal onCloseRequest={() => setOpen(false)}>{children[index]}</Modal>
      )}
    </div>
  );
}

export default GalleryModal;
