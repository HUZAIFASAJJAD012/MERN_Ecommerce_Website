import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  {dataphoto} from "../carouseldata";

const Homecarousel = () => {
    const items = dataphoto.map(

        (item)=> <img className='cursor-pointer   object-top object-fill h-[40rem] ' style={{width:"100%"}} role='presentation' src={item.image} alt='image'/>
    )
  return (
    <div>
      <AliceCarousel
     
       controlsStrategy="alternate"
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>
  )
}

export default Homecarousel
