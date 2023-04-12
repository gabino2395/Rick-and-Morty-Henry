import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card-box">
      <button className="onClose-btn" onClick={(id) => props.onClose(props.id)}>
        x
      </button>
      <Link to={`/detail/${props.id}`}>

      <div className="inner-card-box">
        <div className="card-box-img">

          <img className="card-img" src={props.image} alt="" />
        <div className="card-box-items">
          <h2>
              <span className="span-items">Nombre:</span> {props.name}
          </h2>
          {/* <h2>
            <span className="span-items">Status:</span> {props.status}
          </h2> */}
          {/* <h2>
            <span className="span-items">Especie:</span>
            {props.species}
          </h2> */}
          <h2>
            <span className="span-items">Genero:</span>
            {props.gender}
          </h2>
          {/* <h2>
            <span className="span-items">Origen:</span>
            {props.origin.name}
          </h2> */}
        </div>
        </div>
      </div>
      </Link>

    </div>
  );
}
