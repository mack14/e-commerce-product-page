import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";

import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={image1} alt="slider1-1" className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="slider1-2" className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="slider1-3" className="carousel-image" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image4} alt="slider1-4" className="carousel-image" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
