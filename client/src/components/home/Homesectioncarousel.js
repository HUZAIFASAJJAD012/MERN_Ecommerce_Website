import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Sectioncard from "../Sectioncard";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const Homesectioncarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };
  const items = [1, 1, 1, 1, 1].map((item) => <Sectioncard />);
  return (
    <div className=" relative px-4 lg:px-8">
        <div className="relative p-5">
        <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        responsive={responsive}
      />
      <button variant="contained" className="z-50" sx={{position:'absalute',top:"8rem",right:"0rem",transform:""}} color="white" aria-label="next"><ArrowLeftIcon/></button>
        </div>
      
    </div>
  );
};

export default Homesectioncarousel;
