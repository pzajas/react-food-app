import Slider from "../components/Slider/Slider";
import Cards from "../components/Card/Cards";
import Menu from "../components/Menu/Menu";

import image from "../assets/Images/Slider.jpg";

const MainPage = () => {
  return (
    <div>
      <Slider image={image} />
      <Cards />
      <Menu />
    </div>
  );
};

export default MainPage;
