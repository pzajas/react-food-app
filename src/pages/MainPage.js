import Slider from "../components/Slider/Slider";
import Cards from "../components/Card/Cards";

import image from "../assets/Images/Slider.jpg";

const MainPage = () => {
  return (
    <div>
      <Slider image={image} />
      <Cards />
    </div>
  );
};

export default MainPage;
