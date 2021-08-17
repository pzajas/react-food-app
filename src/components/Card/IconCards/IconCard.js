import { GrRestaurant } from "react-icons/gr";

import "./IconCard.css";

const IconCard = () => {
  return (
    <div className="icon-card">
      <GrRestaurant className="icon" />
      <h4 className="icon__card-title">FRESH FOOD</h4>
      <h5 className="icon__card-line">----------</h5>
      <h6 className="icon__card-small">
        We use only the best ingredients to cook the tasty fresh food for you!
      </h6>
    </div>
  );
};

export default IconCard;
