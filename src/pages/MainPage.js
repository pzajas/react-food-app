import Slider from "../components/Slider/Slider";
import Cards from "../components/Card/ImageCards/Cards";
import IconCards from "../components/Card/IconCards/IconCards";
import Menu from "../components/Menu/Menu";
import Gallery from "../components/Gallery/Gallery";

import PrimarySlider from "../assets/Images/PrimarySlider.jpg";
import SecondarySlider from "../assets/Images/SecondarySlider.jpg";

const MainPage = () => {
  return (
    <div>
      <Slider image={PrimarySlider} />
      <Cards />
      <Menu />
      <Slider image={SecondarySlider} />
      <IconCards />
      <Gallery />
    </div>
  );
};

export default MainPage;
