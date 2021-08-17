import Card from "./Card";

import "./Cards.css";

import SquareOne from "../../assets/Images/SquareOne.jpg";
import SquareTwo from "../../assets/Images/SquareTwo.jpg";
import SquareThree from "../../assets/Images/SquareThree.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <Card image={SquareOne} />
      <Card image={SquareTwo} />
      <Card image={SquareThree} />
      <Card image={SquareOne} />
    </div>
  );
};

export default Cards;
