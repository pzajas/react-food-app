import "./Card.css";

const Card = ({ image }) => {
  return (
    <div className="card">
      <img src={image} alt="Information pic" />
    </div>
  );
};

export default Card;
