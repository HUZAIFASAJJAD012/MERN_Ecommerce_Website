import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Homecarousel = () => {
    const items = [
        <div className="item" data-value="1">1</div>,
        <div className="item" data-value="2">2</div>,
        <div className="item" data-value="3">3</div>,
        <div className="item" data-value="4">4</div>,
        <div className="item" data-value="5">5</div>,
    ];
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
    />
    </div>
  )
}

export default Homecarousel
