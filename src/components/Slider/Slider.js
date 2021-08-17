import "./Slider.css";

const MainSlider = ({ image }) => {
  return (
    <div className="slider">
      <img src={image} alt="Primary slider" width="100%" />
    </div>
  );
};

export default MainSlider;
