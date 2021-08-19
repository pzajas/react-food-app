import "./GalleryImage.css";

const GalleryImage = ({ image }) => {
  return (
    <div className="gallery-image">
      <img src={image} alt="Gallery item" max-width="100%" />
    </div>
  );
};

export default GalleryImage;
