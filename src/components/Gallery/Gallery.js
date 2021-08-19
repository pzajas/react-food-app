import GalleryImage from "./GalleryImage";

import GalleryOne from "../../assets/Images/GalleryOne.jpg";
import GalleryTwo from "../../assets/Images/GalleryTwo.jpg";

import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container">
      <div className="content-large">
        <GalleryImage className="img" image={GalleryTwo} />
      </div>
      <div className="content-small-one">
        <GalleryImage image={GalleryTwo} />
      </div>
      <div className="content-medium-horizontal-one">
        <GalleryImage image={GalleryTwo} />
      </div>
      <div className="content-medium-horizontal-two">
        <GalleryImage image={GalleryTwo} />
      </div>
      <div className="content-small-three">
        <GalleryImage image={GalleryTwo} />
      </div>
      <div className="content-medium-vertical-one">
        <GalleryImage image={GalleryTwo} />
      </div>
    </div>
  );
};

export default Gallery;
