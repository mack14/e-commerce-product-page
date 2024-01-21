import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import close from "../images/icon-close.svg";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

import image_thumb1 from "../images/image-product-1-thumbnail.jpg";
import image_thumb2 from "../images/image-product-2-thumbnail.jpg";
import image_thumb3 from "../images/image-product-3-thumbnail.jpg";
import image_thumb4 from "../images/image-product-4-thumbnail.jpg";

import "./lightbox.css";

function LightBox({ onClose }) {
  const images = [
    {
      original: image1,
      thumbnail: image_thumb1,
    },
    {
      original: image2,
      thumbnail: image_thumb2,
    },
    {
      original: image3,
      thumbnail: image_thumb3,
    },
    {
      original: image4,
      thumbnail: image_thumb4,
    },
  ];

  return (
    <div>
      <div className="close" onClick={onClose}>
        <img src={close} alt="" />
      </div>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
      ;
    </div>
  );
}

export default LightBox;
