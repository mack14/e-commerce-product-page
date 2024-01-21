import "./laptop_slider.css";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-1-thumbnail.jpg";
import image3 from "../images/image-product-2-thumbnail.jpg";
import image4 from "../images/image-product-3-thumbnail.jpg";
import image5 from "../images/image-product-4-thumbnail.jpg";

import LightBox from "./LightBox";
import { useState } from "react";

function LaptopSlider() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <div className="main">
      <div className="main-image" onClick={openLightbox}>
        <img src={image1} alt="main-product" />
      </div>
      <div className="image-thumb">
        <div className="thumb">
          <img src={image2} alt="thumb1" />
        </div>
        <div className="thumb1">
          <img src={image3} alt="thumb1" />
        </div>
        <div className="thumb1">
          <img src={image4} alt="thumb1" />
        </div>
        <div className="thumb1">
          <img src={image5} alt="thumb1" />
        </div>
      </div>
      {lightboxOpen && (
        <div className="overlay">
          <LightBox onClose={closeLightbox} />
        </div>
      )}
    </div>
  );
}

export default LaptopSlider;
