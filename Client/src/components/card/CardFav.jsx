// import "./Card.css";
// import { Link } from "react-router-dom";
// import { addFav, removeFav } from "../../redux/actions";
// import { connect } from "react-redux";
// import { useState, useEffect } from "react";
// function CardFav({
//   id,
//   name,
//   species,
//   gender,
//   image,
//   onClose,
//   addFav,
//   removeFav,
//   myFavorites,
// }) {
//   const [isFav, setIsFav] = useState(false);

//   const handleFavourite = () => {
//     if (isFav) {
//       setIsFav(false);
//       removeFav(id);
//     } else {
//       setIsFav(true);
//       addFav({ id, name, species, gender, image, onClose });
//     }
//   };

//   useEffect(() => {
//     myFavorites.forEach((fav) => {
//       if (fav.id === id) {
//         setIsFav(true);
//       }
//     });
//   }, [myFavorites]);

//   return (
//     <div className="card-box">
//       {/* <button className="onClose-btn" onClick={() => onClose(id)}>
//         x
//       </button> */}
//       <Link to={`/detail/${id}`}>
//         <div className="inner-card-box">
//           <div className="card-box-img">
//             <img className="card-img" src={image} alt="" />
//             <div className="card-box-items">
//               <h2>
//                 <span className="span-items">Nombre:</span> {name}
//               </h2>
//               <h2>
//                 <span className="span-items">Genero:</span>
//                 {gender}
//               </h2>
//             </div>
//           </div>
//         </div>
//       </Link>
//             <button className="fav-btn" onClick={handleFavourite}>{isFav ? "❤️"  : "🤍"}</button>
//       {/* <i className="bi bi-heart-fill "></i> */}
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (character) => {
//       dispatch(addFav(character));
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(CardFav);


//////////////////



import "./Card.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function CardFav({
  id,
  name,
  species,
  gender,
  image,
  onClose
}) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavourite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, species, gender, image, onClose }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className="card-box">
      {/* <button className="onClose-btn" onClick={() => onClose(id)}>
        x
      </button> */}
      <Link to={`/detail/${id}`}>
        <div className="inner-card-box">
          <div className="card-box-img">
            <img className="card-img" src={image} alt="" />
            <div className="card-box-items">
              <h2>
                <span className="span-items">Nombre:</span> {name}
              </h2>
              <h2>
                <span className="span-items">Genero:</span>
                {gender}
              </h2>
            </div>
          </div>
        </div>
      </Link>
            <button className="fav-btn" onClick={handleFavourite}>{isFav ? "❤️"  : "🤍"}</button>
      {/* <i className="bi bi-heart-fill "></i> */}
    </div>
  );
}

export default CardFav;

