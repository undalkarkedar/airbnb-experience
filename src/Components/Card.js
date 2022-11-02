import star from "../Images/Star 1.png";
import "./Card.css";
export default function Card(props) {
  // let imgPath = `../Images${props.img}`
  return (
    <div className="card">
      {/*  eslint-disable-next-line */}
      <img src={`Images/${props.img}`} alt="cardImg" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="ratingStar" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span className="gray">{props.Country}</span>
      </div>
      <div>
        <p>{props.title}</p>
        <p>
          <span className="bold">From ${props.price} </span> / person
        </p>
      </div>
    </div>
  );
}
