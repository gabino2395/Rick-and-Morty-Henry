import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css"
const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className="detail-box">
            <img className="detail-img" src={character?.image} alt="" />
<div className="detail-inner-box">

      <h5>{character.name}</h5>

      <h5 className="font-7 img-texts">
        {character.status !=="unknown"? <h5>Status: { character.status}</h5>: <h5>no disponible</h5> }
        {/* <span className="font-3 img-texts">{photo.location.name}</span> */}
      </h5>
      <h5>Species:{character?.species}</h5>
      <h5>Gender: {character?.gender}</h5>
      <h5>

        Origin: {character.origin?.name}
        {/* {character.origin ? <p>Origin: {character.origin.name}</p> : <p>no se encuentra</p>} */}
      </h5>
      </div>


    
    </div>
  );
};

export default Detail;
