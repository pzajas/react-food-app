import Slider from "../components/Slider/Slider";
import Cards from "../components/Card/Cards";
import Menu from "../components/Menu/Menu";

import PrimarySlider from "../assets/Images/PrimarySlider.jpg";
import SecondarySlider from "../assets/Images/SecondarySlider.jpg";

const MainPage = () => {
  return (
    <div>
      <Slider image={PrimarySlider} />
      <Cards />
      <Menu />
      <Slider image={SecondarySlider} />
    </div>
  );
};

export default MainPage;
