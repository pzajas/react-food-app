import IconCard from "./IconCard";

import ChefHat from "../../../assets/Icons/chef-hat.png";
import Burger from "../../../assets/Icons/burger.png";

import "./IconCards.css";

const IconCards = () => {
  return (
    <div className="icon-cards">
      <IconCard image={ChefHat} />
      <IconCard image={ChefHat} />
      <IconCard image={ChefHat} />
      <IconCard image={ChefHat} />
    </div>
  );
};

export default IconCards;
